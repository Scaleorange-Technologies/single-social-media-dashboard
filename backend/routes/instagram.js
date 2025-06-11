require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN; 
const upload = multer({ storage: multer.memoryStorage() });
const cloudinary = require('../utils/cloudinary'); 



router.post('/post', upload.single('image'), async (req, res) => {
  const { caption, image_url: rawUrl } = req.body;

  try {
    let image_url = rawUrl;

    // If a file is uploaded, upload to Cloudinary
    if (req.file) {
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'image',
              folder: 'instagram_photos',
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          stream.end(buffer);
        });
      };

      const uploadResult = await streamUpload(req.file.buffer);
      image_url = uploadResult.secure_url;
      console.log('Cloudinary upload complete:', image_url);
    }

    // If no image provided at all
    if (!image_url) {
      return res.status(400).json({ error: 'No image provided (file or URL).' });
    }

    // Step 1: Get Facebook Page ID
    const pagesRes = await axios.get(`https://graph.facebook.com/v19.0/me/accounts`, {
      params: { access_token: ACCESS_TOKEN },
    });

    if (!pagesRes.data.data.length) {
      return res.status(400).json({ error: 'No Facebook Pages found for the token' });
    }

    const pageId = pagesRes.data.data[0].id;

    // Step 2: Get Instagram Business Account ID
    const instaRes = await axios.get(`https://graph.facebook.com/v19.0/${pageId}`, {
      params: {
        fields: 'connected_instagram_account',
        access_token: ACCESS_TOKEN,
      },
    });

    const igUserId = instaRes.data.connected_instagram_account?.id;
    if (!igUserId) {
      return res.status(400).json({ error: 'No connected Instagram Business Account found' });
    }

    // Step 3: Create media container
    const containerRes = await axios.post(
      `https://graph.facebook.com/v19.0/${igUserId}/media`,
      null,
      {
        params: {
          image_url,
          caption,
          access_token: ACCESS_TOKEN,
        },
      }
    );

    const creation_id = containerRes.data.id;

    // Step 4: Publish the post
    const publishRes = await axios.post(
      `https://graph.facebook.com/v19.0/${igUserId}/media_publish`,
      null,
      {
        params: {
          creation_id,
          access_token: ACCESS_TOKEN,
        },
      }
    );

    res.status(200).json({ success: true, publish_response: publishRes.data });
  } catch (err) {
    console.error('Instagram error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to post on Instagram' });
  }
});

router.post('/postvideo', upload.single('video'), async (req, res) => {
  const { caption } = req.body;

  try {
    if (!req.file && !req.body.video_url) {
      return res.status(400).json({ error: 'No video file or URL provided' });
    }

    // Upload video to Cloudinary if file provided
    let video_url = req.body.video_url;

    if (req.file) {
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'video',
              folder: 'instagram_reels',
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          stream.end(buffer);
        });
      };

      const uploadResult = await streamUpload(req.file.buffer);
      video_url = uploadResult.secure_url;
      console.log('Uploaded video URL:', video_url);
    }

    // Get Facebook Page ID
    const pagesRes = await axios.get('https://graph.facebook.com/v19.0/me/accounts', {
      params: { access_token: ACCESS_TOKEN },
    });
    const pageId = pagesRes.data.data[0].id;

    // Get connected Instagram Business Account ID
    const instaRes = await axios.get(`https://graph.facebook.com/v19.0/${pageId}`, {
      params: {
        fields: 'connected_instagram_account',
        access_token: ACCESS_TOKEN,
      },
    });

    const igUserId = instaRes.data.connected_instagram_account?.id;
    if (!igUserId) {
      return res.status(400).json({ error: 'No connected Instagram Business Account found' });
    }

    // Create media container for reel
    const containerRes = await axios.post(
      `https://graph.facebook.com/v19.0/${igUserId}/media`,
      null,
      {
        params: {
          media_type: 'REELS',
          video_url,
          caption,
          share_to_feed: true,
          access_token: ACCESS_TOKEN,
        },
      }
    );

    const creation_id = containerRes.data.id;
    console.log('Creation ID:', creation_id);

    // Poll for video processing status
    let status = 'IN_PROGRESS';
    const pollingInterval = 3000;
    const maxWaitTime = 180000;
    const startTime = Date.now();

    while (status === 'IN_PROGRESS') {
      if (Date.now() - startTime > maxWaitTime) {
        return res.status(400).json({ error: 'Timed out waiting for video processing.' });
      }

      await delay(pollingInterval);

      const statusRes = await axios.get(`https://graph.facebook.com/v19.0/${creation_id}`, {
        params: {
          fields: 'status_code',
          access_token: ACCESS_TOKEN,
        },
      });

      status = statusRes.data.status_code;
      console.log(`Status check: ${status}`);

      if (status === 'ERROR') {
        console.error('Reel processing error:', statusRes.data);
        return res.status(400).json({ error: 'Video processing failed.', details: statusRes.data });
      }
    }

    // Publish the reel
    const publishRes = await axios.post(
      `https://graph.facebook.com/v19.0/${igUserId}/media_publish`,
      null,
      {
        params: {
          creation_id,
          access_token: ACCESS_TOKEN,
        },
      }
    );

    res.status(200).json({ success: true, publish_response: publishRes.data });
  } catch (err) {
    console.error('Instagram Reels Publish Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to post video as Reel on Instagram' });
  }
});


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = router;

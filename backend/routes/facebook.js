require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN; // Page Access Token or a user token with pages_manage_posts
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
              folder: 'facebook_photos',
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
      console.log('Uploaded image to Cloudinary:', image_url);
    }

    if (!image_url) {
      return res.status(400).json({ error: 'No image file or URL provided' });
    }

    // Step 1: Get Facebook Page ID
    const pagesRes = await axios.get(`https://graph.facebook.com/v19.0/me/accounts`, {
      params: { access_token: ACCESS_TOKEN },
    });

    if (!pagesRes.data.data || pagesRes.data.data.length === 0) {
      return res.status(400).json({ error: 'No Facebook Pages found for the token' });
    }

    const page = pagesRes.data.data[0];
    const pageId = page.id;
    const pageAccessToken = page.access_token;

    // Step 2: Post image with caption to the page
    const postRes = await axios.post(
      `https://graph.facebook.com/v19.0/${pageId}/photos`,
      null,
      {
        params: {
          url: image_url,
          caption,
          access_token: pageAccessToken,
        },
      }
    );

    res.status(200).json({ success: true, post_id: postRes.data.post_id });
  } catch (err) {
    console.error('Facebook post error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to post on Facebook' });
  }
});

router.post('/postvideo', upload.single('video'), async (req, res) => {
  const { caption } = req.body;

  try {
    if (!req.file && !req.body.video_url) {
      return res.status(400).json({ error: 'No video file or URL provided' });
    }

    // Upload to Cloudinary if file exists
    let video_url = req.body.video_url;

    if (req.file) {
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'video',
              folder: 'facebook_videos',
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
      console.log('Uploaded to Cloudinary:', video_url);
    }

    // Get Facebook Page & its page access token
    const pagesRes = await axios.get(`https://graph.facebook.com/v19.0/me/accounts`, {
      params: { access_token: ACCESS_TOKEN },
    });

    if (!pagesRes.data.data.length) {
      return res.status(400).json({ error: 'No Facebook pages found for this user.' });
    }

    const page = pagesRes.data.data[0];
    const pageId = page.id;
    const pageAccessToken = page.access_token;

    // Post video to Facebook Page
    const fbVideoRes = await axios.post(
      `https://graph.facebook.com/v19.0/${pageId}/videos`,
      null,
      {
        params: {
          file_url: video_url,
          description: caption,
          access_token: pageAccessToken,
        },
      }
    );

    res.status(200).json({
      success: true,
      facebook: fbVideoRes.data,
    });

  } catch (err) {
    console.error('Facebook Video Post Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to post video on Facebook' });
  }
});




module.exports = router;

require('dotenv').config();
const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const router = express.Router();
const https = require('https');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const rwClient = twitterClient.readWrite;


const downloadImageBuffer = async (url) => {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const data = [];
        res.on('data', chunk => data.push(chunk));
        res.on('end', () => resolve(Buffer.concat(data)));
      }).on('error', reject);
    });
  };


  const downloadVideoBuffer = (url) => {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const data = [];
        res.on('data', (chunk) => data.push(chunk));
        res.on('end', () => resolve(Buffer.concat(data)));
      }).on('error', reject);
    });
  };


// router.post('/post', upload.single('image'), async (req, res) => {
//     try {
//       const { caption } = req.body;
  
//       if (!caption) {
//         return res.status(400).json({ success: false, error: 'Caption is required.' });
//       }
  
//       let mediaId = null;
  
//       if (req.file) {
//         // 📷 Image uploaded via frontend file input
//         mediaId = await rwClient.v1.uploadMedia(req.file.buffer, { mimeType: req.file.mimetype });
//       } else if (req.body.image_url) {
//         // 🌐 Image URL provided instead
//         const buffer = await downloadImageBuffer(req.body.image_url);
//         mediaId = await rwClient.v1.uploadMedia(buffer, { mimeType: 'image/jpeg' });
//       } else {
//         return res.status(400).json({ success: false, error: 'No image file or URL provided.' });
//       }
  
//       const tweet = await rwClient.v2.tweet({
//         text: caption,
//         media: {
//           media_ids: [mediaId],
//         },
//       });
  
//       res.json({ success: true, tweet });
//     } catch (error) {
//       console.error('Error posting tweet:', error);
//       res.status(500).json({
//         success: false,
//         error: error.message || 'Failed to post tweet.',
//       });
//     }
//   });



router.post('/post', upload.single('image'), async (req, res) => {
    try {
      const { caption } = req.body;
  
      if (!caption) {
        return res.status(400).json({ success: false, error: 'Caption is required.' });
      }
  
      let mediaId = null;
  
      if (req.file) {
        // 📷 Image uploaded via frontend file input
        mediaId = await rwClient.v1.uploadMedia(req.file.buffer, { mimeType: req.file.mimetype });
      } else if (req.body.image_url) {
        // 🌐 Image URL provided instead
        const buffer = await downloadImageBuffer(req.body.image_url);
        mediaId = await rwClient.v1.uploadMedia(buffer, { mimeType: 'image/jpeg' });
      } else {
        return res.status(400).json({ success: false, error: 'No image file or URL provided.' });
      }
  
      const tweet = await rwClient.v2.tweet({
        text: caption,
        media: {
          media_ids: [mediaId],
        },
      });
  
      res.json({ success: true, tweet });
    } catch (error) {
      console.error('Error posting tweet:', error);
       console.log("eror",error.code)
      if (error?.data?.errors?.some(e => e.title === 'Too Many Requests' || e.code === 429)) {
        // Twitter API rate limit error detected
        res.status(429).json({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
        });
      } else if (error.code === 429) {
        // General 429 error detected
        res.status(429).json({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
        });
      } else {
        // Other errors
        res.status(500).json({
          success: false,
          error: error.message || 'Failed to post tweet.',
        });
      }
    }
  });
  
  router.post('/postvideo', upload.single('video'), async (req, res) => {
    try {
      const { caption, video_url } = req.body;
  
      if (!caption) {
        return res.status(400).json({ success: false, error: 'Caption is required.' });
      }
  
      let videoBuffer;
      let mimeType = 'video/mp4'; // default MIME type for Twitter
  
      if (req.file) {
        videoBuffer = req.file.buffer;
        mimeType = req.file.mimetype;
        console.log('Received video file upload');
      } else if (video_url) {
        console.log('Downloading video from URL...');
        videoBuffer = await downloadVideoBuffer(video_url);
        // optional: use file extension to infer MIME type if needed
      } else {
        return res.status(400).json({ success: false, error: 'No video file or URL provided.' });
      }
  
      // Upload video to Twitter using chunked upload
      const mediaId = await rwClient.v1.uploadMedia(videoBuffer, {
        mimeType,
        target: 'tweet',
      });
  
      console.log('Video uploaded to Twitter. Media ID:', mediaId);
  
      // Post the tweet with caption and video
      const tweet = await rwClient.v2.tweet({
        text: caption,
        media: {
          media_ids: [mediaId],
        },
      });
  
      res.status(200).json({ success: true, tweet });
    } catch (error) {
      console.error('Error posting video on Twitter:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to post video on Twitter.',
      });
    }
  });

module.exports = router;
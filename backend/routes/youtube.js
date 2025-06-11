const express = require('express');
const multer = require('multer');
const https = require('https');
const { google } = require('googleapis');
const stream = require('stream');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// Your Google OAuth2 credentials
const CLIENT_ID = process.env.CLIENT_ID; // Your Google Client ID
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; // Must match your Google Console redirect URI

// Manually generated refresh token - set this in your .env or config
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Scopes for uploading videos (not strictly needed here but good practice)
const SCOPES = [
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl',
  'https://www.googleapis.com/auth/youtube.upload',
];

// Helper function to download video buffer from URL
const downloadVideoBuffer = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
      res.on('error', reject);
    }).on('error', reject);
  });
};

// POST /postvideo - upload video to YouTube either via uploaded file or video_url
router.post('/postvideo', upload.single('video'), async (req, res) => {
//   const { title = 'Untitled Video', description = '', video_url, privacyStatus = 'public' } = req.body;
const { caption, description = '', video_url, privacyStatus = 'public' } = req.body;
    const title = caption;
  if (!title) {
    return res.status(400).json({ error: 'Video title is required.' });
  }

  if (!REFRESH_TOKEN) {
    return res.status(400).json({
      error:
        'Refresh token not configured. Please generate manually and set REFRESH_TOKEN environment variable.',
    });
  }

  try {
    // Set OAuth2 credentials using manually set refresh token
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    let videoBuffer;

    if (req.file) {
      console.log('Uploading from uploaded file...');
      videoBuffer = req.file.buffer;
    } else if (video_url) {
      console.log('Downloading video from URL...');
      videoBuffer = await downloadVideoBuffer(video_url);
    } else {
      return res.status(400).json({ error: 'No video file or video_url provided.' });
    }

    // Convert Buffer to readable stream for googleapis
    const bufferStream = new stream.PassThrough();
    bufferStream.end(videoBuffer);

    const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
   console.log("Uploading video to YouTube...");
    // Upload video to YouTube
    const response = await youtube.videos.insert({
      part: ['snippet', 'status'],
      requestBody: {
        snippet: {
          title,
          description,
        },
        status: {
          privacyStatus, // public, private, or unlisted
        },
      },
      media: {
        body: bufferStream,
      },
    });

    res.status(200).json({
      success: true,
      videoId: response.data.id,
      details: response.data,
    });
  } catch (error) {
    console.error('YouTube upload error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to upload video',
    });
  }
});

module.exports = router;

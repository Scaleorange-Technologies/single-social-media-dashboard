# Single Social Media Dashboard

A comprehensive social media dashboard that allows users to post content to multiple platforms (Facebook, Instagram, Twitter, YouTube) from a single interface.

## Features

- **Multi-Platform Posting**: Post images and videos to Facebook, Instagram, Twitter, and YouTube.
- **Unified Interface**: Manage your social media presence from one dashboard.
- **Media Support**: Upload images and videos directly or use URLs.
- **Real-time Feedback**: Get status updates on your posts.

## Technology Stack

### Frontend
- **React**: UI library for building the interface.
- **Lucide React**: For icons.
- **Framer Motion**: For animations.
- **Axios**: For making API requests.

### Backend
- **Node.js & Express**: Server-side runtime and framework.
- **Multer**: For handling file uploads.
- **Cloudinary**: For cloud storage of images and videos.
- **Twitter API v2**: For interacting with Twitter.
- **Google APIs (YouTube)**: For uploading videos to YouTube.
- **Axios**: For making HTTP requests to social media APIs.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Scaleorange-Technologies/single-social-media-dashboard.git
cd single-social-media-dashboard
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5000

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Twitter API Configuration
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret

# Facebook & Instagram Configuration
# Page Access Token or User Token with pages_manage_posts / pages_manage_metadata / instagram_basic / instagram_content_publish
INSTAGRAM_ACCESS_TOKEN=your_facebook_page_access_token

# YouTube API Configuration (Google OAuth2)
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REDIRECT_URI=your_redirect_uri
REFRESH_TOKEN=your_google_refresh_token
```

Start the backend server:

```bash
npm start
```

The server will run on `http://localhost:5000`.

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

Start the frontend development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Usage

1.  Ensure both backend and frontend servers are running.
2.  Open the application in your browser.
3.  Select the platform(s) you want to post to.
4.  Enter your caption and upload an image or video (or provide a URL).
5.  Click "Post" to publish your content.


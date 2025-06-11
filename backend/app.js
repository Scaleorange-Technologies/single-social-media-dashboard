// index.js
const express = require('express');
const cors = require('cors');
const instagramRoutes = require('./routes/instagram');
const facebookRoutes = require('./routes/facebook');
const twitterRoutes = require('./routes/twitter');
const youtubeRoutes = require('./routes/youtube');
require('dotenv').config();




const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use('/api/instagram', instagramRoutes);
app.use('/api/facebook', facebookRoutes);
app.use('/api/twitter', twitterRoutes);
app.use('/api/youtube',youtubeRoutes);


app.listen(5000, () => {
  console.log('Server running on port 5000');
});

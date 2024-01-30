const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');
const musicRoute = require('./routes/music');
const userRoute = require('./routes/user');
const premiumUserRoute = require('./routes/premiumuser');
const adminRoute = require('./routes/admin');
const favoriteSongRoute = require('./routes/favoritesong');
const recentSongRoute = require('./routes/recentsong');
const downloadedSongRoute = require('./routes/downloadedsong');

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/musicdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database successfully');
}).catch((error) => {
  console.error('Could not connect to the database:', error.message);
});

// Use routes
app.use('/api/artists', artistRoute);
app.use('/api/albums', albumRoute);
app.use('/api/musics', musicRoute);
app.use('/api/users', userRoute);
app.use('/api/premiumusers', premiumUserRoute);
app.use('/api/admins', adminRoute);
app.use('/api/favoritesongs', favoriteSongRoute);
app.use('/api/recentsongs', recentSongRoute);
app.use('/api/downloadedsongs', downloadedSongRoute);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

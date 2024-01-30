const mongoose = require('mongoose');

const favoriteSongSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Music',
    required: true,
  },
});

const FavoriteSong = mongoose.model('FavoriteSong', favoriteSongSchema);

module.exports = FavoriteSong;

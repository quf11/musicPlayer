const mongoose = require('mongoose');

const recentSongSchema = new mongoose.Schema({
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

const RecentSong = mongoose.model('RecentSong', recentSongSchema);

module.exports = RecentSong;

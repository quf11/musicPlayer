const mongoose = require('mongoose');

const downloadedSongSchema = new mongoose.Schema({
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

const DownloadedSong = mongoose.model('DownloadedSong', downloadedSongSchema);

module.exports = DownloadedSong;

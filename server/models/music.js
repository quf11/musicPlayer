const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
 /*  songFile: {
    type: Buffer, // Assuming you want to store the file in binary format
  }, */
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;

import react from 'react';
const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;

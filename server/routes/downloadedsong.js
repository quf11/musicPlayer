const express = require('express');
const router = express.Router();
const DownloadedSong = require('../models/downloadedsong');

// Route to get all downloaded songs
router.get('/', async (req, res) => {
  try {
    const downloadedSongs = await DownloadedSong.find().populate('user song', 'username title');
    res.json(downloadedSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add a new downloaded song
router.post('/', async (req, res) => {
  const { userId, songId } = req.body;
  try {
    const newDownloadedSong = new DownloadedSong({ user: userId, song: songId });
    await newDownloadedSong.save();
    res.status(201).json(newDownloadedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

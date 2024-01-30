const express = require('express');
const router = express.Router();
const RecentSong = require('../models/recentsong');

// Route to get all recent songs
router.get('/', async (req, res) => {
  try {
    const recentSongs = await RecentSong.find().populate('user song', 'username title');
    res.json(recentSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add a new recent song
router.post('/', async (req, res) => {
  const { userId, songId } = req.body;
  try {
    const newRecentSong = new RecentSong({ user: userId, song: songId });
    await newRecentSong.save();
    res.status(201).json(newRecentSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

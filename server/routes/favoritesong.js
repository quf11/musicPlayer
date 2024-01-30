const express = require('express');
const router = express.Router();
const FavoriteSong = require('../models/favoritesong');

// Route to get all favorite songs
router.get('/', async (req, res) => {
  try {
    const favoriteSongs = await FavoriteSong.find().populate('user song', 'username title');
    res.json(favoriteSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add a new favorite song
router.post('/', async (req, res) => {
  const { userId, songId } = req.body;
  try {
    const newFavoriteSong = new FavoriteSong({ user: userId, song: songId });
    await newFavoriteSong.save();
    res.status(201).json(newFavoriteSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

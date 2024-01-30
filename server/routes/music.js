const express = require('express');
const router = express.Router();
const Music = require('../models/music');

// Get all musics
router.get('/', async (req, res) => {
  try {
    const musics = await Music.find();
    res.json(musics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get music by ID
router.get('/:id', async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    res.json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new music
router.post('/', async (req, res) => {
  const music = new Music({
    name: req.body.name,
    premium: req.body.premium,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    duration: req.body.duration,
  });

  try {
    const newMusic = await music.save();
    res.status(201).json(newMusic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete music by ID
router.delete('/:id', async (req, res) => {
  try {
    await Music.findByIdAndDelete(req.params.id);
    res.json({ message: 'Music deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

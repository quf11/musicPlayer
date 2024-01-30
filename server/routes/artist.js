const express = require('express');
const router = express.Router();
const Artist = require('../models/artist');

// Get all artists
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get artist by ID
router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new artist
router.post('/', async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    country: req.body.country,
    genre: req.body.genre,
    followers: req.body.followers,
  });

  try {
    const newArtist = await artist.save();
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete artist by ID
router.delete('/:id', async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

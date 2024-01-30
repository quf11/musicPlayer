const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// Get all albums
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get album by ID
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new album
router.post('/', async (req, res) => {
  const album = new Album({
    title: req.body.title,
    artist: req.body.artist,
  });

  try {
    const newAlbum = await album.save();
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete album by ID
router.delete('/:id', async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    res.json({ message: 'Album deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

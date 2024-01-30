const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

// Route to get all admin users
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find({}, 'username');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add a new admin user
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const PremiumUser = require('../models/premiumuser');

// Route to get all premium users
router.get('/', async (req, res) => {
  try {
    const premiumUsers = await PremiumUser.find().populate('user', 'username email');
    res.json(premiumUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add a new premium user
router.post('/', async (req, res) => {
  const { userId } = req.body;
  try {
    const newPremiumUser = new PremiumUser({ user: userId });
    await newPremiumUser.save();
    res.status(201).json(newPremiumUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

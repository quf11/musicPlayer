const mongoose = require('mongoose');

const premiumUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
});

const PremiumUser = mongoose.model('PremiumUser', premiumUserSchema);

module.exports = PremiumUser;

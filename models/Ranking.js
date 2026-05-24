const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  avgScore: {
    type: Number,
    default: 0
  },
  highestScore: {
    type: Number,
    default: 0
  },
  attemptCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ranking', rankingSchema);
const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  averageScore: {
    type: Number,
    default: 0
  },
  highestScore: {
    type: Number,
    default: 0
  },
  totalAttempts: {
    type: Number,
    default: 0
  },
  rankPosition: {
    type: Number,
    default: null
  }
});

rankingSchema.index({ studentId: 1, subjectId: 1 }, { unique: true });

module.exports = mongoose.model('Ranking', rankingSchema);

const mongoose = require('mongoose');

const subjectStatisticSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
    unique: true
  },
  totalAttempts: {
    type: Number,
    default: 0
  },
  averageScore: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('SubjectStatistic', subjectStatisticSchema);

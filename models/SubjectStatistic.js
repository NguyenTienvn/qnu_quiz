const mongoose = require('mongoose');

const subjectStatisticSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  totalExams: {
    type: Number,
    default: 0
  },
  avgScore: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SubjectStatistic', subjectStatisticSchema);
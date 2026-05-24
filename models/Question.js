const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  correctAnswer: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
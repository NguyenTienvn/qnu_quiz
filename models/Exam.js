const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  duration: {
    type: Number,
    default: 15
  },
  questions: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      },
      selectedAnswer: {
        type: String,
        default: ''
      }
    }
  ],
  isSubmitted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Exam', examSchema);
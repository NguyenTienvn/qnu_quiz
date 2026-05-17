const mongoose = require('mongoose');

const questionOptionSchema = new mongoose.Schema(
  {
    optionText: {
      type: String,
      required: true,
      trim: true
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  },
  {
    _id: true
  }
);

const questionSchema = new mongoose.Schema(
  {
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
      index: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium'
    },
    options: {
      type: [questionOptionSchema],
      validate: {
        validator(options) {
          return options.length >= 2;
        },
        message: 'A question must have at least two options'
      }
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: false }
  }
);

module.exports = mongoose.model('Question', questionSchema);

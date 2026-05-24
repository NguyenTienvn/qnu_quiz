const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Subject', subjectSchema);
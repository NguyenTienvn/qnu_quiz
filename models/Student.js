const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  studentCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  className: {
    type: String,
    trim: true
  },
  faculty: {
    type: String,
    trim: true
  },
  academicYear: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Student', studentSchema);

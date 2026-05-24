const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  className: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
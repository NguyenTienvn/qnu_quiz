const express = require('express');
const {
  createExam,
  submitExam,
  getMyExams
} = require('../controllers/examController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createExam);
router.post('/submit', authMiddleware, submitExam);
router.get('/my-exams', authMiddleware, getMyExams);

module.exports = router;
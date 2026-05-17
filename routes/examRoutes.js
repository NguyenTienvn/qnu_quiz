const express = require('express');
const {
  getPracticeList,
  startExam,
  submitExam,
  getExamHistory,
  getExamById
} = require('../controllers/examController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/practice-list', getPracticeList);
router.post('/start', authMiddleware, startExam);
router.post('/:examId/submit', authMiddleware, submitExam);
router.get('/history', authMiddleware, getExamHistory);
router.get('/:examId', authMiddleware, getExamById);

module.exports = router;

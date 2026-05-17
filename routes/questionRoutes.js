const express = require('express');
const {
  getQuestions,
  getQuestionById,
  getQuestionsBySubject,
  createQuestion,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', getQuestions);
router.get('/subject/:subjectId', getQuestionsBySubject);
router.get('/:id', getQuestionById);
router.post('/', authMiddleware, adminMiddleware, createQuestion);
router.put('/:id', authMiddleware, adminMiddleware, updateQuestion);
router.delete('/:id', authMiddleware, adminMiddleware, deleteQuestion);

module.exports = router;

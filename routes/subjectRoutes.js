const express = require('express');
const {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
} = require('../controllers/subjectController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', getSubjects);
router.get('/:id', getSubjectById);
router.post('/', authMiddleware, adminMiddleware, createSubject);
router.put('/:id', authMiddleware, adminMiddleware, updateSubject);
router.delete('/:id', authMiddleware, adminMiddleware, deleteSubject);

module.exports = router;

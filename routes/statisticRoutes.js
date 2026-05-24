const express = require('express');
const {
  getStatistics
} = require('../controllers/statisticController');

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, getStatistics);

module.exports = router;
const express = require('express');
const { getMyStatistics } = require('../controllers/statisticController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/me', authMiddleware, getMyStatistics);

module.exports = router;

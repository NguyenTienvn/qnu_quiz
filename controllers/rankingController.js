const Ranking = require('../models/Ranking');

const getRankings = async (req, res) => {
  try {
    const rankings = await Ranking.find()
      .populate('user', 'fullName email role')
      .sort({ avgScore: -1, highestScore: -1 });

    res.json(rankings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRankings
};
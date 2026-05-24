const User = require('../models/User');
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Exam = require('../models/Exam');
const SubjectStatistic = require('../models/SubjectStatistic');

const getStatistics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalSubjects = await Subject.countDocuments();
    const totalQuestions = await Question.countDocuments();
    const totalExams = await Exam.countDocuments({ isSubmitted: true });

    const subjectStatistics = await SubjectStatistic.find().populate('subject');

    res.json({
      totalUsers,
      totalSubjects,
      totalQuestions,
      totalExams,
      subjectStatistics
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStatistics
};
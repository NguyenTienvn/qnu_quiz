const Question = require('../models/Question');

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate('subject');
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('subject');

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createQuestion = async (req, res) => {
  try {
    const {
      subject,
      content,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer
    } = req.body;

    if (!subject || !content || !correctAnswer) {
      return res.status(400).json({
        message: 'Subject, content and correctAnswer are required'
      });
    }

    const question = await Question.create({
      subject,
      content,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer
    });

    res.status(201).json({
      message: 'Question created successfully',
      question
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({
      message: 'Question updated successfully',
      question
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({
      message: 'Question deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};
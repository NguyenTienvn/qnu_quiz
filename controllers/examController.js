const Exam = require('../models/Exam');
const Question = require('../models/Question');
const Ranking = require('../models/Ranking');
const SubjectStatistic = require('../models/SubjectStatistic');

const createExam = async (req, res) => {
  try {
    const { subject, questionCount, duration } = req.body;

    const questions = await Question.find({ subject });

    if (questions.length === 0) {
      return res.status(400).json({
        message: 'This subject has no questions'
      });
    }

    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, Number(questionCount) || 5);

    const exam = await Exam.create({
      user: req.user.id,
      subject,
      duration: duration || 15,
      questions: selectedQuestions.map(q => ({
        question: q._id,
        selectedAnswer: ''
      }))
    });

    const result = await Exam.findById(exam._id)
      .populate('subject')
      .populate('questions.question');

    res.status(201).json({
      message: 'Exam created successfully',
      exam: result
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const submitExam = async (req, res) => {
  try {
    const { examId, answers } = req.body;

    const exam = await Exam.findById(examId).populate('questions.question');

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    let correctCount = 0;

    exam.questions.forEach(item => {
      const answer = answers.find(a => String(a.questionId) === String(item.question._id));

      if (answer) {
        item.selectedAnswer = answer.selectedAnswer;

        if (answer.selectedAnswer === item.question.correctAnswer) {
          correctCount++;
        }
      }
    });

    const total = exam.questions.length;
    const wrongCount = total - correctCount;
    const score = Number(((correctCount / total) * 10).toFixed(2));

    exam.isSubmitted = true;
    await exam.save();

    const userExams = await Exam.find({
      user: exam.user,
      isSubmitted: true
    }).populate('questions.question');

    const scores = userExams.map(e => {
      let count = 0;

      e.questions.forEach(q => {
        if (q.selectedAnswer === q.question.correctAnswer) {
          count++;
        }
      });

      return Number(((count / e.questions.length) * 10).toFixed(2));
    });

    const avgScore = Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2));
    const highestScore = Math.max(...scores);

    await Ranking.findOneAndUpdate(
      { user: exam.user },
      {
        user: exam.user,
        avgScore,
        highestScore,
        attemptCount: scores.length
      },
      { upsert: true, new: true }
    );

    const subjectExams = await Exam.find({
      subject: exam.subject,
      isSubmitted: true
    }).populate('questions.question');

    const subjectScores = subjectExams.map(e => {
      let count = 0;

      e.questions.forEach(q => {
        if (q.selectedAnswer === q.question.correctAnswer) {
          count++;
        }
      });

      return Number(((count / e.questions.length) * 10).toFixed(2));
    });

    const subjectAvg = Number((subjectScores.reduce((a, b) => a + b, 0) / subjectScores.length).toFixed(2));

    await SubjectStatistic.findOneAndUpdate(
      { subject: exam.subject },
      {
        subject: exam.subject,
        totalExams: subjectExams.length,
        avgScore: subjectAvg
      },
      { upsert: true, new: true }
    );

    res.json({
      message: 'Exam submitted successfully',
      result: {
        score,
        total,
        correctCount,
        wrongCount
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyExams = async (req, res) => {
  try {
    const exams = await Exam.find({ user: req.user.id })
      .populate('subject')
      .populate('questions.question')
      .sort({ createdAt: -1 });

    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createExam,
  submitExam,
  getMyExams
};
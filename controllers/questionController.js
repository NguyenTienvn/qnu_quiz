const apiWorking = (req, res) => {
  res.json({
    message: 'API working'
  });
};

const getQuestions = apiWorking;
const getQuestionById = apiWorking;
const getQuestionsBySubject = apiWorking;
const createQuestion = apiWorking;
const updateQuestion = apiWorking;
const deleteQuestion = apiWorking;

module.exports = {
  getQuestions,
  getQuestionById,
  getQuestionsBySubject,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

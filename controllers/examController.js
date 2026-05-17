const apiWorking = (req, res) => {
  res.json({
    message: 'API working'
  });
};

const getPracticeList = apiWorking;
const startExam = apiWorking;
const submitExam = apiWorking;
const getExamHistory = apiWorking;
const getExamById = apiWorking;

module.exports = {
  getPracticeList,
  startExam,
  submitExam,
  getExamHistory,
  getExamById
};

const apiWorking = (req, res) => {
  res.json({
    message: 'API working'
  });
};

const getSubjects = apiWorking;
const getSubjectById = apiWorking;
const createSubject = apiWorking;
const updateSubject = apiWorking;
const deleteSubject = apiWorking;

module.exports = {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
};

const apiWorking = (req, res) => {
  res.json({
    message: 'API working'
  });
};

const register = apiWorking;
const login = apiWorking;
const getProfile = apiWorking;

module.exports = {
  register,
  login,
  getProfile
};

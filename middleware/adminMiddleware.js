const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Admin permission is required'
    });
  }

  next();
};

module.exports = adminMiddleware;

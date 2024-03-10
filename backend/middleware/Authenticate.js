exports.isAuth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  res.redirect(process.env.Client_Base_URL + "/login");
};

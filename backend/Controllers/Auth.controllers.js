const { User } = require("../Model/User.model");

exports.CreateUsers = async (req, res) => {
  res.redirect(process.env.Client_Base_URL);
};

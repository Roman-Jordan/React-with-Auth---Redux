const dbModel = require("../authModel");

//If succesful, creates req.user
module.exports = async (req, res, next) => {
  const errors = [];
  const user = req.body;

  // required fields
  !!user.password ? null : errors.push("Password: required");
  !!user.email ? null : errors.push("email: required");

  if (!errors.length) {
    req.user = await dbModel.findByEmail(user.email);
  }

  !!req.user ? null : errors.push("Unknown Username or Password");
  errors.length < 1 ? next() : res.status(401).json({ errors });
};

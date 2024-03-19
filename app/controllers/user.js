const { User } = require("../models");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  try {
    req.body.password= await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating new user.",
    });
  }
};

exports.login = (req, res) => {
  res.send("You are login");
};

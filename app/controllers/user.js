const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    console.log(req.body)    
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      ...req.body,
      password: passwordHash,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating new user.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        error: "Invalid password",
      });
    }

    const token = await jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: Number(process.env.JWTExpiration),
    });

    res.status(200).json({
      accessToken: token,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while logging user.",
    });
  }
};

const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      name,
      email,
      password,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: "Invalid request" });
  }
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    console.log(isMatch);

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      token: token,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid request" });
    console.log(error);
  }
};

module.exports = { Register, Login };

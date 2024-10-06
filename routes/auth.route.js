const express = require("express");
const { Register, Login } = require("../controllers/auth.controller");
const AuthRoute = express.Router();

AuthRoute.post("/register", Register);

AuthRoute.post("/login", Login);

module.exports = AuthRoute;

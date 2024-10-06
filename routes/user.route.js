const express = require("express");
const {
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../controllers/users.controller");
const UserRoute = express.Router();

UserRoute.get("/", getUsers);

UserRoute.get("/:id", getUserByID);

UserRoute.put("/:id", updateUserByID);

UserRoute.delete("/:id", deleteUserByID);

module.exports = UserRoute;

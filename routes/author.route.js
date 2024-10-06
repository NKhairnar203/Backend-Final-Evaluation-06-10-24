const express = require("express");
const Author = require("../models/author.model");
const AuthorRoute = express.Router();

AuthorRoute.post("/", async (req, res) => {
  const { name, biography, dateOfBirth, nationality } = req.body;
  try {
    const author = await Author.create({
      name,
      biography,
      dateOfBirth,
      nationality,
    });
    res.status(201).json({ author });
  } catch (error) {
    res.status(500).json({ message: "Error creating author" });
  }
});

AuthorRoute.get("/", async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(201).json({ authors });
  } catch (error) {
    res.status(500).json({ message: "Error finding authors" });
  }
});

AuthorRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const authors = await Author.findOne({ _id: id }).populate("books");
    res.status(201).json({ authors });
  } catch (error) {
    res.status(500).json({ message: "Error finding author" });
  }
});

AuthorRoute.put("/id", async (req, res) => {
  const { id } = req.params;
  const { name, biography, dateOfBirth, nationality } = req.body;
  try {
    const author = await Author.findByIdAndUpdate(
      { _id: id },
      { name, biography, dateOfBirth, nationality }
    );
    res.status(201).json({ author });
  } catch (error) {
    res.status(500).json({ message: "Error updateing author" });
  }
});

AuthorRoute.delete("/id", async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findByIdAndDelete({ _id: id });
    res.status(201).json({ meassge:"Author delete successfully.." });
  } catch (error) {
    res.status(500).json({ message: "Error delete author" });
  }
});

module.exports = AuthorRoute;

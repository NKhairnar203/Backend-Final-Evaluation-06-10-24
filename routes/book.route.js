const express = require("express");
const Book = require("../models/book.model");
const BookRoute = express.Router();

BookRoute.post("/", async (req, res) => {
  const { title, ISBN ,summary,pulicationDate,genres,copiesAvailable,authorId } = req.body;
  try {
    const book = await Book.create({
      title,
      ISBN,
      summary,
      pulicationDate,
      genres,
      copiesAvailable,
      authorId,
    });
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Error creating book" });
  }
});

BookRoute.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Error finding book" });
  }
});

BookRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id }).populate("books");
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Error finding book" });
  }
});

BookRoute.put("/id", async (req, res) => {
  const { id } = req.params;
  const { name, biography, dateOfBirth, nationality } = req.body;
  try {
    const autbookhor = await Book.findByIdAndUpdate(
      { _id: id },
      { name, biography, dateOfBirth, nationality }
    );
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Error updateing book" });
  }
});

BookRoute.delete("/id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete({ _id: id });
    res.status(201).json({ meassge: "Author delete successfully.." });
  } catch (error) {
    res.status(500).json({ message: "Error delete author" });
  }
});

module.exports = BookRoute;

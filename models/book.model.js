const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  summary: {
    type: String,
  },
  publicationDate: {
    type: Date,
  },
  genres: {
    type: Array,
  },
  copiesAvailable: {
    type: Number,
    default: 1,
  },
  borrowedBy: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;

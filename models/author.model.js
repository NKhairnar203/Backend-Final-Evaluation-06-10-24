const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: "Book",
  },
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

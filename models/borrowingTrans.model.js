const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  borrowDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Borrowed", "Returned"],
    default: "Borrowed",
  },
});

const Borrow = mongoose.model("Borrow", BorrowSchema);

module.exports = Borrow;

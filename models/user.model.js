const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  borrowedBooks: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: "Book",
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
  next();
});

UserSchema.methods.comparePassword = async function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

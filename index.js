const express = require("express");
const Database = require("./config/db");
const Port = 3000 || 8080;
const AuthRoute = require("./routes/auth.route");
const UserRoute = require("./routes/user.route");
const Auththentication = require("./middlewares/Auth.middleware");
const AuthorRoute = require("./routes/author.route");
const BookRoute = require("./routes/book.route");
const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("page works");
});

app.use("/api/auth", AuthRoute);
app.use("/api/users", Auththentication, UserRoute);
app.use("/api/authors", Auththentication, AuthorRoute);
app.use("/api/books", Auththentication, BookRoute);

app.listen(Port, async () => {
  try {
    await Database;
    console.log(`Server is running on port ${Port}`);
  } catch (error) {
    console.log(error);
  }
});

const mongoose = require("mongoose");

const Database = mongoose.connect("mongodb://127.0.0.1:27017/Library");


module.exports = Database;
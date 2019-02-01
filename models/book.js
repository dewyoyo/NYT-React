const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookid: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: Array, required: true },
  imglink: String,
  link: String,
  description:String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBV8ecVDRmf1vCz08hiTERQ3lsLM7kq5Eg";
// const BASEURL = process.env.BASE_URL;
// const APIKEY = "&key=" + process.env.API_KEY;


export default {
  search: function(query) {
    console.log(process.env.API_KEY);

    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  searchBook: function(title) {
    return axios.get("/api/books/" + title);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };
//
// module.exports = Book;

// Old code above - Refactored code below

export default class Book {
  constructor(author, title, genre){
    this.author = author;
    this.title = title;
    this.genre = genre;
  }
};

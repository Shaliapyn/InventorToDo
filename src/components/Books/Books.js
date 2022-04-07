import React from "react";

import "./style.css";
import Book from "../Book";

const Books = ({ bookList, onRemoveBook, onReadBook }) => {
  if (!bookList.length) {
    return <h2 className="no-books">THERE IS NO BOOKS</h2>;
  }

  return (
    <ul className="book-list">
      {bookList.map((book, idx) => (
        <Book
          onReadBook={onReadBook}
          key={book.id}
          num={idx + 1}
          book={book}
          onRemoveBook={onRemoveBook}
        />
      ))}
    </ul>
  );
};

export default Books;

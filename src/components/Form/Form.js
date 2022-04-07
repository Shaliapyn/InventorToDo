import React, { useState } from "react";

import "./style.css";

const Form = ({ addBook, removeAll, bookList, readBooks }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    isRead: false,
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    addBook(newBook);
    setNewBook(() => ({
      isRead: false,
      title: "",
      description: "",
    }));
  };
  return (
    <>
      <form className="form-block" onSubmit={submitHandler}>
        <div className="form-block__inp">
          <input
            required
            value={newBook.title}
            onChange={(e) =>
              setNewBook((prew) => ({ ...prew, title: e.target.value }))
            }
            placeholder="write down the title of the book"
          />
          <textarea
            value={newBook.description}
            onChange={(e) =>
              setNewBook((prew) => ({ ...prew, description: e.target.value }))
            }
            className="description-inp"
            placeholder="write down the description of the book"
          />
          <div>
            <span className="all-books-count">All: {bookList.length}</span>
            <span className="read-books-count">
              Read: {bookList.length - readBooks.length}
            </span>
            <span className="not-read-books-count">
              Not Read: {readBooks.length}
            </span>
          </div>
        </div>
        <div className="btns-block">
          <button className="form-btn btn-add" type="submit">
            Add book
          </button>
          <button className="form-btn btn-remove" onClick={removeAll}>
            Delete all
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

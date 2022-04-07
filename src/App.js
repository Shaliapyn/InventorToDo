import { useEffect, useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Books from "./components/Books";
import BOOKLIST from "./todo-list.json";

function App() {
  const [bookList, setBookList] = useState(BOOKLIST);
  const [readBooks, setReadBooks] = useState(bookList);

  useEffect(() => {
    setReadBooks(bookList.filter((book) => !book.isRead));
  }, [bookList]);

  const removeBook = (id) => {
    setBookList((bookList) => bookList.filter((book) => book.id !== id));
  };
  const removeAll = () => {
    setBookList([]);
  };
  const onReadBook = (id) => {
    const idx = bookList.findIndex((elem) => elem.id === id);
    const oldBoj = bookList[idx];
    const newObj = { ...oldBoj, isRead: !oldBoj.isRead };
    console.log(newObj);
    setBookList((prew) => [
      ...prew.slice(0, idx),
      newObj,
      ...prew.slice(idx + 1),
    ]);
  };
  const addBook = (book) => {
    setBookList((prev) => [
      ...prev,
      {
        ...book, // без перевірки на довжину, якщо видалити всі книжки, то всі наступні додані будуть з id -infinity
        id: prev.length ? Math.max(...prev.map((elem) => elem.id)) + 1 : 1, 
      },
    ]);
  };
  return (
    <div className="container">
      <Form
        readBooks={readBooks}
        bookList={bookList}
        removeAll={removeAll}
        addBook={addBook}
      />
      <Books
        onReadBook={onReadBook}
        onRemoveBook={removeBook}
        bookList={bookList}
      />
    </div>
  );
}

export default App;

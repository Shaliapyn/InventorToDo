import React from 'react'

import "./style.css"

const Book = ({book, onRemoveBook, num, onReadBook}) => {
  const styleTitle = `${book.isRead ? "isRead": ""}`

  
  return (
    <li className='book-list-li'>
      <span>{num}</span>
      <span className={styleTitle}>{book.title}</span>
      <div>
        <button className='btn' onClick={()=> onRemoveBook(book.id)}>delete</button>
        <input 
          type="checkbox"
          checked={book.isRead}
          onChange={(e => onReadBook(book.id))}
        />
      </div>
    </li>
  )
}

export default Book
import React, { useState } from 'react'

import "./style.css"

const Book = ({book, onRemoveBook, num, onReadBook}) => {
  const styleTitle = `${book.isRead ? "isRead": ""}`
  const [isShown, setIsShown] = useState(false)

  const styleDescBtn = `${book.description ? "blue-desc-btn" : "red-desc-btn"}`

  const toggleFIeldset = () => setIsShown(!isShown);
  return (
    <li>
      <div className='book-list-li'>
          <span>{num}</span>
          <span className={styleTitle}>{book.title}</span>
          <div>
            <button className='btn' onClick={()=> onRemoveBook(book.id)}>delete</button>
            <button className={styleDescBtn} onClick={toggleFIeldset}>description</button>
            <input 
              type="checkbox"
              checked={book.isRead}
              onChange={(e => onReadBook(book.id))}
            />
        </div>
      </div>
      {isShown && <span className='description-text'>{book.description}</span>}
    </li>
  )
}

export default Book
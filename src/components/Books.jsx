import React from "react";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  return (
    <ul className="books">
      {books.map(book => {
        console.log(book);
        return (
          <li key={book.id} className="book">
            <h2>{book.volumeInfo.title}</h2>
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail
              }
              alt="Book Cover"
            />
            <p>Authors: {book.volumeInfo.authors}</p>
          </li>
        );
      })}
    </ul>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Books;

import React from 'react';
import { Link } from 'react-router-dom';

function BookBox({ book }) {
  return (
    <Link to={`/books/${book._id}`}>
      <article>
        <img src={book.image} />
        <hr />
        <h3>{book.name}</h3>
      </article>
    </Link>
  );
}

export default BookBox;

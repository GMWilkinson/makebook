import React from 'react';
import { Link } from 'react-router-dom';

function BookBox({ book }) {
  return (
    <Link to={`/books/${book._id}`}>
      <article className="column is-4">
        <figure className="image">
          <img src={book.image} />
        </figure>
        <hr />
        <h3>{book.name}</h3>
        <p>{book.author}</p>
      </article>
    </Link>
  );
}

export default BookBox;

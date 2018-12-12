import React from 'react';
import { Link } from 'react-router-dom';

function NewBookBox({ book, handleClick }) {
  return (
    <section>
      <div>
        <Link to={`/books/${book._id}/first`}>Read.</Link>
      </div>
      <Link to={`/books/${book._id}/pages`}>
        <article className="column is-4">
          <figure className="image">
            <img src={book.image} />
          </figure>
          <hr />
          <h3>{book.name}</h3>
          <p>{book.author}</p>
        </article>
      </Link>
    </section>
  );
}

export default NewBookBox;

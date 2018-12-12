import React from 'react';
import { Link } from 'react-router-dom';

function NewBookBox({ book }) {
  return (
    <section className="column is-4">
      <div>
        <Link to={`/books/${book._id}/first`}>Read.</Link>
      </div>
      <Link to={`/books/${book._id}/pages`}>
        <article>
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

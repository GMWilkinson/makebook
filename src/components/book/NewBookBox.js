import React from 'react';
import { Link } from 'react-router-dom';

function NewBookBox({ book }) {
  return (
    <section className="column is-4">
      <div>
        <Link className="font" to={`/books/${book._id}/first`}>Read.</Link>
      </div>
      <Link to={`/books/${book._id}/pages`}>
        <article>
          <figure className="image">
            <img src={book.image} />
          </figure>
          <h3 className="font white-back">{book.title} {book.author}</h3>
        </article>
      </Link>
    </section>
  );
}

export default NewBookBox;

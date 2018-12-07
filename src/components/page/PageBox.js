import React from 'react';
// import { Link } from 'react-router-dom';

function PageBox({ book }) {
  return (
    <article className="column is-4">
      <p>{book.text}</p>
    </article>
  );
}

export default PageBox;

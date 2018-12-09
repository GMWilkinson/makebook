import React from 'react';
import { Link } from 'react-router-dom';

function PageBox({ page }) {
  return (
    <div>
      <h1>Page 1</h1>
      <p>{page.text}</p>
      <div>
        <Link to={`/books/${this.props.match.params.id}/pages/${page.choices[0]._id}/options`}>
          <p>{page.choices[0].text}</p>
        </Link>
        <Link to={`/books/${this.props.match.params.id}/pages/${page.choices[1]._id}/options`}>
          <p>{page.choices[1].text}</p>
        </Link>
      </div>
    </div>
  );
}

export default PageBox;

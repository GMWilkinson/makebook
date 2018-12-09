import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../lib/auth';

export default class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ book: res.data });
      });
  }

  render() {
    const book = this.state.book;
    return (
      <section>
        {book
          ?
          <div>
            <h1>Yay, it worked!</h1>
            <Link to={`/books/${book._id}/pages/first`}>
              <h2>{ book.title }</h2>
              <figure className="image is-3by2">
                <img src={ book.image } />
              </figure>
            </Link>
            <div>
              {isAuthenticated() && <Link to={`/books/${book._id}/new-page/first`}>Start creating your book.</Link>}
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}

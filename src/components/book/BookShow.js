import React from 'react';
import axios from 'axios';
import PageShow from '../page/PageShow';
import { Link } from 'react-router-dom';

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
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}

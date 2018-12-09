import React from 'react';
import axios from 'axios';
import BookBox from './BookBox';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    return (
      <section>
        <h1>All the books</h1>
        <hr />
        <div className="columns">
          {this.state.books && this.state.books.map(
            book => <BookBox key={book._id} book={book}/>
          )}
        </div>
      </section>
    );
  }
}
export default BookIndex;
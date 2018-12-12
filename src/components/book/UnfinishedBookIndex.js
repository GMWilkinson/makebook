import React from 'react';
import axios from 'axios';
import NewBookBox from './NewBookBox';
import { Link } from 'react-router-dom';

class UnfinishedBookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const book = this.state.books;
    const bookId = book[0]._id;
    console.log('In onClick, pageId and bookId', book);
    axios.get(`/api/books/${bookId}`)
      .then(() =>  this.setState({ isCompleted: true }));
  }

  componentDidMount() {
    axios.get('/api/new/writing')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    console.log('this is ', this.state.books);
    return (
      <section>
        <h1>All the books</h1>
        <hr />
        <div className="columns">
          {this.state.books && this.state.books.map(
            book => <NewBookBox key={book._id} book={book}/>
          )}
        </div>
        <div>
          <p onClick={this.handleClick}>Click here to complete this book</p>
        </div>
      </section>
    );
  }
}
export default UnfinishedBookIndex;

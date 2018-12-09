import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import PageForm from './PageForm';
import { isAuthenticated, decodeToken } from '../../lib/auth';

export default class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.props.match.params.BookId);
    axios.post(`/api/books/${this.props.match.params.BookId}/new-page/first`, this.state)
      .then(() => this.props.history.push(`/books/${this.props.match.params.BookId}/new-page`));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">First Page</h2>
        {isAuthenticated() && <p className="title is-3">Created by {decodeToken().username}</p>}
        <PageForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}

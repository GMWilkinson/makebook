import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';
import { authorizationHeader } from '../../lib/auth';
import { Link } from 'react-router-dom';

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  handleClick(pageId) {
    console.log('In onClick, pageId', pageId);
    axios.get(`/api/books/${this.props.match.params.id}/pages/first`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  deletePage(id) {
    console.log('deleting page', id);
    axios.delete(`/api/books/${this.props.match.params.id}/pages/${id}`, authorizationHeader())
      .then(res => {
        this.setState({ page: res.data});
      });
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    const book = this.props.match.params.id;
    console.log('page is', page);
    return (
      <section className="columns">
        {page
          ?
          <div className="column is-12">
            <h1 className="title">All the pages</h1>
            <Link to={`/books/${book}/pages/new`}>Create a new page.</Link>
            <div className="columns is-multiline">
              {page && page.map(page =>
                <div className="column is-3" key={page._id}>
                  <div className="card">
                    <header className="card-header">
                      <h2>{page.pageName}</h2>
                    </header>
                    <div>
                      <p className="page-index">{page.text}</p>
                    </div>
                    <footer className="card-footer">
                      <Link to={`/books/${book}/pages/${page._id}`} className="card-footer-item">Add Choices</Link>
                      <a href="#" className="card-footer-item">Edit</a>
                      <a className="card-footer-item" onClick={() => this.deletePage(page._id)}>Delete</a>
                    </footer>
                  </div>
                </div>
              )}
            </div>
            <div>
            </div>
          </div>

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
export default PageIndex;

import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';


export default class PageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { bookId, pageId } = this.props.match.params;
    axios.get(`/api/books/${bookId}/pages/${pageId}`)
      .then(res => {
        console.log({ page: res.data });
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    return (
      <section>
        {page
          ?
          <div>
            <h1>Page</h1>
            <h2>{ page.title }</h2>
            <div className="columns">
              {this.state.page && this.state.page.map(
                page => <PageBox key={page._id} book={page}/>
              )}
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
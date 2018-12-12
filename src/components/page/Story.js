import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';
import { Link } from 'react-router-dom';

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageId) {
    console.log('In onClick, pageId', pageId);
    axios.get(`/api/books/${this.props.match.params.id}/pages/${pageId}`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages/first`)
      .then(res => {
        // console.log({ page: res.data });
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    console.log('this.state.page is', this.state.page);
    return (
      <section>
        {page
          ?
          <div>
            <h1>Page</h1>
            <p>{page.text}</p>
            <div>
              {page && page.choices.map(choice =>
                <div key={choice._id} onClick={() => this.handleClick(choice.nextPage)}>
                  <p>Choice {choice.text}</p>
                </div>
              )}
            </div>
          </div>

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}

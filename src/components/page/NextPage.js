import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';
import { Link } from 'react-router-dom';


export default class NextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages/${this.props.match.params.pageId}/options`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    console.log('test', this.props.match.params.pageId);
    return (
      <section>
          <div>
            <h1>Next page</h1>

          </div>
      </section>
    );
  }
}

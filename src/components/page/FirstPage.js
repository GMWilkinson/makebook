import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';
import { Link } from 'react-router-dom';

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log('test', page);
    return (
      <section>
        {page
          ?
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

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}

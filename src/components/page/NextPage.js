import React from 'react';
import axios from 'axios';
import PageBox from './PageBox';
import { Link } from 'react-router-dom';

export default class NextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get(`/api/books/${this.props.match.params.id}/pages/${this.props.match.params.pageId}/options`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }
  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages/${this.props.match.params.pageId}/options`)
      .then(res => {
        console.log('this is res.data', res.data);
        this.setState({ page: res.data });
      });
  }


  render() {
    const page = this.state.page;
    console.log('next page test', this.state.page);
    console.log('another bloody test');
    return (
      <section>
        {page
          ?
          <div>
            <p>{page.text}</p>
            <p>{page.choices[0].nextPage}</p>
            <div>
              <Link to={`/books/${this.props.match.params.id}/pages/${page.choices[0].nextPage}/options/2`}>
                <p>{page.choices[0].text}</p>
              </Link>
              <Link to={`/books/${this.props.match.params.id}/pages/${page.choices[1].nextPage}/options/2`}>
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

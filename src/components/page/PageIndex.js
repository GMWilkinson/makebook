import React from 'react';
import axios from 'axios';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`/api/books/${this.props.match.params.id}/pages`);
    axios.get('/api/books')
      .then(result => this.setState({ pages: result.data }));
  }

  render() {
    console.log('rendered');
    return (

      <section>
        <h1>All the pages</h1>

      </section>
    );
  }
}
export default PageIndex;

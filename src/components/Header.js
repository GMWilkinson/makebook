import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Header was mounted');
  }

  render() {
    return (
      <nav className="navbar is-warning">
        {this.state.url && <p>{this.state.url}</p>}
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/books">All the Books</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

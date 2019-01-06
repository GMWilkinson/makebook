import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="title home-title">
          <h1>Welcome to MakeBook</h1>
        </div>
        <article>
          <p>Do you remember game-books?</p>
          <p>With this app you can create your own.</p>
        </article>
      </main>
    );
  }
}
export default Home;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withBrowser } from 'react-router-dom';
import Header from './components/Header';
import BookIndex from './components/books/BookIndex';
import BookShow from './components/books/BookShow';
import Register from './components/auth/register';
import Login from './components/auth/login';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path='/books' component={BookIndex}/>
              <Route path='/books/:bookId' component={BookShow}/>
              <Route path='/books/:bookId' component={BookShow}/>
              <Route path='/register' component={register}/>
              <Route path='/login' component={login}/>
            </Switch>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BookIndex from './components/book/BookIndex';
import BookShow from './components/book/BookShow';
import NewFirstPage from './components/page/NewFirstPage';
import NextPage from './components/page/NextPage';
import NextPage2 from './components/page/NextPage2';
import FirstPage from './components/page/FirstPage';
import New from './components/book/New';
import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';
import Profile from './components/auth/Profile';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <div>
            <Switch>
              <Route exact path='/books' component={BookIndex}/>
              <Route path='/books/:id/pages/:pageId/options/2' component={NextPage2}/>
              <Route path='/books/:id/pages/:pageId/options' component={NextPage}/>
              <Route path='/books/:id/new-page/first' component={NewFirstPage}/>
              <Route path='/books/:id/pages/first' component={FirstPage}/>
              <Route path='/books/:id' component={BookShow}/>
              <Route exact path='/new' component={New}/>
              <Route path='/users' component={Profile}/>
              <Route exact path='/login' component={AuthLogin}/>
              <Route exact path='/register' component={AuthRegister}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

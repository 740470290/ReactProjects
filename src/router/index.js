import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from '~/components/home';
import Detail from '~/components/detail/loadable';
import Login from '~/components/Login';
import Write from '~/components/Write';
import Header from '../common/header';

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/Write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default hot(module)(TodoList);


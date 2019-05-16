import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from '~/components/home';
import Detail from '~/components/detail';
import Header from '../common/header';

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/css" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default hot(module)(TodoList);


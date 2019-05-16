import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoList from './router';
import store from './store';
import './statics/iconfont/iconfont.css';
import './style/style';
import './style/home.css';

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
ReactDOM.render(App, document.getElementById('app'));

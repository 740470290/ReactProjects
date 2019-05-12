import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoList from './router';
import store from './store/index';

const App = (
  // 把数据提供给Provider里面所有的组件
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));

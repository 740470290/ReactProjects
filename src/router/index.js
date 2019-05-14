import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import 'antd/dist/antd.css';
import '../style/style.css';
import {getInputChangeAction, getTodoList, getAddItemAction, getDeleteItemAction}
  from '../store/actionCreators';
import TodolistUI from './TodolistUI';
import store from '../store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
  handleChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return (<TodolistUI
      inputValue={this.state.inputValue}
      handleChange={this.handleChange}
      handleClick={this.handleClick}
      handleDelete={this.handleDelete}
      list={this.state.list}
    />);
  }
}

export default hot(module)(TodoList);

import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import 'antd/dist/antd.css';
import {Input, Button, List, Typography} from 'antd';
import '../style/style.css';
import TodoItem from '../components/TodoItem';
import store from '../store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
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
    return (
      <Fragment>
        <form
          action="#"
          style={{margin: '10px'}}
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <Input
            placeholder="Basic usage"
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.handleChange(e)}
            style={{width: '300px', marginRight: '10px'}}
          />
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => this.handleClick()}
          >
            submit
          </Button>
        </form>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        <ul>
          {
            this.state.list.map((item, index) =>
              (<TodoItem
                item={item}
                index={index}
                key={index}
                handleDelete={this.handleDelete.bind(this)}
              />))
          }
        </ul>
      </Fragment>
    );
  }
}

export default hot(module)(TodoList);

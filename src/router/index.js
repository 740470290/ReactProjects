import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import 'antd/dist/antd.css';
import {Input, Button, List, Typography} from 'antd';
import '../style/style.css';
import TodoItem from '../components/TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学React']
    };
    // 否则指向undefined
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }
  handleClick() {
    this.setState({list: [...this.state.list, this.state.inputValue], inputValue: ''});
  }
  handleDelete(index) {
    const list1 = [...this.state.list];
    list1.splice(index, 1);
    this.setState({
      list: list1
    });
  }
  render() {
    return (
      <Fragment>
        <form
          action="#"
          style={{margin: '10px'}}
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

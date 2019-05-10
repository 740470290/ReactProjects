import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
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
    this.setState({inputValue: this.refs.txt.value});
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
        <form action="#">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.handleChange(e)}
            ref="txt"
          />
          <input type="submit" onClick={() => this.handleClick()} />
        </form>
        <ul>
          {
            this.state.list.map((item, index) =>
              (<li key={index}>
                {item}<a href="#" onClick={() => this.handleDelete(index)}>删除</a>
              </li>))
          }
        </ul>
      </Fragment>
    );
  }
}

export default hot(module)(TodoList);

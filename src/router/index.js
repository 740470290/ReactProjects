import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import '../style/style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
        <form action="" onSubmit={(e) => { e.preventDefault(); }}>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={(e) => this.handleChange(e)}
            ref="txt"
          />
          <input type="submit" onClick={() => this.handleClick()} />
        </form>
        <ul>
          {
            this.props.list.map((item, index) =>
              (<li key={index}>
                {item}<a href="#" onClick={() => this.handleDelete(index)}>删除</a>
              </li>))
          }
        </ul>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => state;

export default hot(module)(connect(mapStateToProps, null)(TodoList));

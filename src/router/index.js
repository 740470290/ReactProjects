import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import '../style/style.css';

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) =>
              (<li
                key={index}
              >{item}<a href="#" onClick={() => this.props.handleDelete()}>删除</a></li>))
          }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  changeInputValue(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    dispatch(action);
  },
  handleClick() {
    const action = {
      type: 'add_item'
    };
    dispatch(action);
  },
  handleDelete(index) {
    const action = {
      type: 'delete_item',
      index
    };
    dispatch(action);
  }
});


export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(TodoList));


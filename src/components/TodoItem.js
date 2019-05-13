import React, {Component} from 'react';

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleDelete = this.handleDelete.bind(this);
  // }
  handleDelete() {
    this.props.handleDelete(this.props.index);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.item === this.props.item) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <li>
        {this.props.item}<a href="#" onClick={() => this.handleDelete()}>删除</a>
      </li>
    );
  }
}


export default TodoItem;

import React, {Component, Fragment} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['lee']
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleAddItem}>toggle</button>
        <TransitionGroup>
          {
            this.state.list.map((item, index) =>
              (<CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                appear
                key={index}
              >
                <li>{item}</li>
              </CSSTransition>))
          }
        </TransitionGroup>
      </Fragment>
    );
  }

  handleAddItem() {
    this.setState({
      list: [...this.state.list, 'item']
    });
  }
}

export default App;

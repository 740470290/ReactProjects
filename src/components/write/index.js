import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent {
  render() {
    return this.props.loginStatus ?
      <div className="write">write</div> :
      (
        <Redirect to="/login" />
      );
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
});

export default connect(mapState, null)(Write);

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {actionCreators} from './store';

class Login extends PureComponent {
  render() {
    return this.props.loginStatus ?
      <Redirect to="/" /> :
      (
        <div className="login">
          <div className="box">
            <input
              type="text"
              placeholder="账号"
              ref={(account) => { this.account = account; }}
            />
            <input
              type="password"
              placeholder="密码"
              ref={(password) => { this.password = password; }}
            />
            <button
              onClick={() => this.props.login(this.account, this.password)}
            >登录</button>
          </div>
        </div>
      );
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
});
const mapDispatch = (dispatch) => ({
  login(account, password) {
    const action = actionCreators.log(account.value, password.value);
    dispatch(action);
  }
});

export default connect(mapState, mapDispatch)(Login);

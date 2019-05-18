import axios from 'axios';
import * as actionTypes from './actionType';

export const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
});
export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
});

export const log = (account, password) => (
  (dispatch) => {
    axios.post(
      'http://172.17.14.250/user/login',
      {acc: account, pass: password}
    ).then((res) => {
      const action = changeLogin();
      dispatch(action);
    });
  }
);


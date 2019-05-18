import axios from 'axios';
import * as actionTypes from './actionTypes';

export const changeDetail = (data) => ({
  type: actionTypes.CHANGE_DETAIL,
  data
});

export const getDetail = (id) => (
  (dispatch) => {
    axios.get(`http://172.17.14.250/api/detail?id=${id}`).then((res) => {
      const action = changeDetail(res.data);
      dispatch(action);
    });
  }
);


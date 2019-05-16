import axios from 'axios';
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});
export const getList = () => (
  (dispatch) => {
    axios.get('http://172.17.14.250/api/headerList').then((res) => {
      const action = changeList(res.data);
      dispatch(action);
    });
  }
);


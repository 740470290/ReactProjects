import axios from 'axios';
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

export const changeHomeData = (res) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: res.topicList,
  articleList: res.articleList,
  recommendList: res.recommendList
});
export const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});
export const toggleTop = (show) => ({
  type: actionTypes.TOGGLE_SCROLL,
  show
});
export const getHomeInfo = () => (
  (dispatch) => {
    axios.get('http://172.17.14.250/api/home').then((res) => {
      const action = changeHomeData(res.data);
      dispatch(action);
    });
  }
);
export const getMoreList = (page) => (
  (dispatch) => {
    axios.get(`http://172.17.14.250/api/articleList?page=${page}`).then((res) => {
      const action = addHomeList(res.data.articleList, page + 1);
      dispatch(action);
    });
  }
);


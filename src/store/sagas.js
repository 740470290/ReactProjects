import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';

function* getInitList() {
  try {
    const res = yield axios.get('http://127.0.0.1:50100');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    throw e;
  }
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;

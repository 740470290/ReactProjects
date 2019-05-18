import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '~/common/header/store';
import {reducer as homeReducer} from '~/components/home/store';
import {reducer as detailReducer} from '~/components/detail/store';
import {reducer as loginReducer} from '~/components/login/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
});

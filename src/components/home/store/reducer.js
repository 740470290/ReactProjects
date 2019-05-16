import {fromJS} from 'immutable';
import topic from '~/statics/topic.jpg';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: topic
  }]
});

export default (state = defaultState, action) => state;

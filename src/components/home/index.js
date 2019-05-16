import React, {Component} from 'react';
import List from './List';
import Recommend from './Recommend';
import Topic from './Topic';
import Writter from './Writter';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import homePic from '../../statics/home.jpg';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src={homePic}
            alt=""
            width="625px"
            height="270px"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
      </HomeWrapper>
    );
  }
}


export default Home;

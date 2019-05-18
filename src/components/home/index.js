import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import List from './List';
import Recommend from './Recommend';
import Topic from './Topic';
import Writter from './Writter';
import {actionCreators} from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import homePic from '../../statics/home.jpg';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
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
        {this.props.showScroll && <div
          className="backTop"
          onClick={this.handleScrollTop}
        >顶部</div>}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScroll);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScroll);
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScroll() {
    document.documentElement.scrollTop > 400 ?
      dispatch(actionCreators.toggleTop(true)) :
      dispatch(actionCreators.toggleTop(false));
  }
});

export default connect(mapState, mapDispatch)(Home);

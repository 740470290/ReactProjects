import React, {PureComponent} from 'react';
import list from '~/statics/list.jpg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from './store';

class List extends PureComponent {
  render() {
    const {getMoreList, page} = this.props;
    return (
      <div>
        {
          this.props.list.map((item, index) => (
            <div className="listItem" key={index}>
              <img src={item.get('imgUrl')} alt="" />
              <div className="listInfo">
                <Link to={`/detail/${item.get('id')}`} className="title">{item.get('title')}</Link>
                <p className="desc">{item.get('desc')}</p>
              </div>
            </div>
          ))
        }
        <div
          className="loadMore"
          onClick={() => getMoreList(page)}
        >加载更多</div>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'page'])
});
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDispatch)(List);

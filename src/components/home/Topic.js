import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import topic from '~/statics/topic.jpg';

class Topic extends PureComponent {
  render() {
    return (
      <div className="topic">
        {
          this.props.list.map((item) => (
            <div className="topicItem" key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </div>
          ))
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);

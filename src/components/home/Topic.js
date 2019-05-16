import React, {Component} from 'react';
import topic from '../../statics/topic.jpg';

class Topic extends Component {
  render() {
    return (
      <div className="topic">
        <div className="topicItem">
          <img src={topic} alt="" />
          社会热点
        </div>
      </div>
    );
  }
}

export default Topic;

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Recommend extends PureComponent {
  render() {
    return (
      <div className="reco">
        {
          this.props.list.map((item) => (
            <div key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
            </div>
          ))
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);

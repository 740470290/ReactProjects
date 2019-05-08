import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './router';
// import Button from '@material-ui/core/Button';
import SignIn from './containers/SignIn';
// import TabContainer from './containers/TabContainer';
//globe css
// import './style/index.styl';
// import './style/less.less';
// import './style/sass.sass';
// import './style/scss.scss';

function Root() {
  return (
    <div>
      {/*<Button variant="contained" color="primary">*/}
      {/*你好,世界*/}
      {/*</Button>*/}
      {/*<TabContainer />*/}
      <SignIn />
    </div>
  );
}

// ReactDOM.render(<Root />, document.getElementById('app'));
ReactDOM.render(<Root />, document.getElementById('app'));

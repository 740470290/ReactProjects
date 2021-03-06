import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '~/components/login/store';
import {actionCreators} from './store';
import {
  HeaderWrapper, Logo, Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style';

class Header extends Component {
  render() {
    const {
      focused, handleInputFocus, handleInputBlur, page, handleMouseEnter,
      handleMouseLeave, mouseIn, handleChangePage, totalPage, login, logout
    } = this.props;
    const list = this.props.list.slice((page - 1) * 10, page * 10);
    return (
      <div className="header">
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ?
            <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused && 'focused'}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe637;</span>
            <SearchInfo
              className={(mouseIn || focused) && 'focused'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch
                  onClick={(e) => handleChangePage(e, page, totalPage)}
                ><span className="iconfont spin">&#xe606;</span>
                  换一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <div>
                {
                  list.map((item) => (
                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                  ))
                }
              </div>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe617;</span>
            写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </div>
    );
  }
}
let a = 0;
const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused'),
  list: state.get('header').get('list'),
  page: state.get('header').get('page'),
  totalPage: state.get('header').get('totalPage'),
  mouseIn: state.get('header').get('mouseIn'),
  login: state.getIn(['login', 'login']),
});
const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    !list.size && dispatch(actionCreators.getList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleChangePage(e, page, totalPage) {
    a += 360;
    e.target.firstChild.style.transform = 'rotate('.concat(a, 'deg)');
    page < totalPage ? dispatch(actionCreators.changePage(page + 1)) :
      dispatch(actionCreators.changePage(1));
  },
  logout() {
    dispatch(loginActionCreators.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  height: 56px;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size:contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    cursor: pointer;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  height: 38px;
  border: none;
  outline: none;
  font-size: 14px;
  margin-left: 20px;
  border-radius: 19px;
  background: #eee;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter,&.slide-exit{
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &.slide-enter-active{
    width: 240px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  display: none;
  top: 56px;
  background: #fff;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  &.focused {
      display: block;
    }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.a`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    font-size: 12px;
    margin-right: 2px;
    float: left;
    transform-origin: center center;
    transition: all 0.2s ease-in;
  }
`;
export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
`;


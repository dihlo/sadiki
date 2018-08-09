import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Menu, Icon, Row, Col } from 'antd';
import { Link, browserHistory  } from 'react-router-dom';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuClose extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick (e) {
    console.log('click ', e);
  }

  render() {
    return (
    <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
      >
          <Menu.Item key="1"><Link to="/closepart/home"><span><Icon type="video-camera" /></span></Link></Menu.Item>
          <Menu.Item key="2"><Link to="/closepart/food"><span><Icon type="coffee" /></span></Link></Menu.Item>
          <Menu.Item key="3"><Link to="/closepart/schedule"><span><Icon type="schedule" /></span></Link></Menu.Item>
          <Menu.Item key="4"><Link to="/closepart/news"><span><Icon type="solution" /></span></Link></Menu.Item>
      </Menu>
    );
  }
}

/*function mapStateToProps(state) {
  const  {pageID}  = state.pagesselect;
  return {
    pageID,
    pages: state.pages,
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SubMenu);*/


export default MenuClose;
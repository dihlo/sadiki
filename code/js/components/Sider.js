import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

import { Menu, Icon } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MySider extends React.Component {
  showlist() {
    return this.props.pages.map((pages) => {
      return (
        <Menu.Item onClick={() => this.props.select (pages)} key={pages.id}><span><Icon type="mail" /><span>{pages.name}</span></span></Menu.Item>
      );
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        /*defaultOpenKeys={['sub1']}*/
        mode="inline"
      > 
        {this.showlist()}
      </Menu>
    );
  }
}
        /*<Menu.Item key="1"><span><Icon type="mail" /><span>Обеды</span></span></Menu.Item>
        <Menu.Item key="2"><span><Icon type="mail" /><span>Расписание</span></span></Menu.Item>
        <Menu.Item key="3"><span><Icon type="mail" /><span>Новости</span></span></Menu.Item>
        <Menu.Item key="4"><span><Icon type="mail" /><span>Шаблоны</span></span></Menu.Item>
        <Menu.Item key="5"><span><Icon type="mail" /><span>Пользователи</span></span></Menu.Item> */  

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MySider);


//export default MySider;
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

import { Menu, Icon, Row, Col } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MySider extends React.Component {
  onClick({ item, key, keyPath }) {
    this.props.select(key);
  }

  showlist() {
    return this.props.pages.map((pages) => {
      return (
        <Menu.Item key={pages.id}><span><Icon type={pages.icon} /><span>{pages.name}</span></span></Menu.Item>
      );
    });
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Menu
            onClick={this.onClick.bind(this)} 
            defaultSelectedKeys={['1']}
            /*defaultOpenKeys={['sub1']}*/
            mode="inline"
          > 
            {this.showlist()}
          </Menu>
        </Col>
      </Row>
    );
  }
}

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
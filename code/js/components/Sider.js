import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions';
import { Menu, Icon, Row, Col } from 'antd';
import { Link, browserHistory  } from 'react-router-dom';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MySider extends React.Component {
  constructor(props) {
    super(props);

    //получаю выбранную страницу из URL (это нужно когда страница открывается по прямой ссылке)
    if(location.pathname != '/')
      this.props.select(this.props.pages.find((e) => e.url === location.pathname).id.toString());
  }

  onClick({ item, key, keyPath }) {
    this.props.select(key);
  }

  showlist() {
    return this.props.pages.map((pages) => {
      return (
        <Menu.Item key={pages.id}><Link to={pages.url}><span><Icon type={pages.icon} /><span>{pages.name}</span></span></Link></Menu.Item>
      );
    });
  }

  render() {
console.log('Sider '+this.props.pageID);
    return (
      <Row>
        <Col span={24}>
          <Menu
            onClick={this.onClick.bind(this)} 
            selectedKeys={[this.props.pageID]}
            mode="inline"> 
            {this.showlist()}
          </Menu>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const  {pageID}  = state.pagesselect;
  return {
    pageID,
    pages: state.pages,
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MySider);


//export default MySider;
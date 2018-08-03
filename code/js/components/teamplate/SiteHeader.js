import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Row, Col, Popconfirm } from 'antd';
import { Menu, Icon } from 'antd';

import "./style.css";
import logo from './img/logo.png';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SiteHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    	current: 'mail'
      }
      this.handleClick = this.handleClick.bind(this);
      };

  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
    	<Row>
    		<Col
	            offset={1} 
	            span={6}
	            style={{ paddingTop: 20, marginBottom: 20}}
    		>
    			<div className="logo">
    				<img className="logoimg" src={logo} alt="логотип"/> 
    			</div>  			
    		</Col>
    		<Col>    		
				<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
				style={{ paddingTop: 20, paddingBottom: 20}}
				>
					<Menu.Item key="about">
					  <Icon type="star-o" />О детсаде
					</Menu.Item>
					<Menu.Item key="news">
					  <Icon type="mail" />Новости
					</Menu.Item>
					<Menu.Item key="schedules">
					  <Icon type="schedule" />Кружки, уроки
					</Menu.Item>
					<Menu.Item key="inventory">
					  <Icon type="tool" />Инвентарь
					</Menu.Item>
					<Menu.Item key="teachers">
					  <Icon type="team" />Преподователи
					</Menu.Item>
					<Menu.Item key="document">
					  <Icon type="copy" />Документы
					</Menu.Item>													
				</Menu>
    		</Col>			
		</Row>
    );
  }
}

/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(SiteHeader);*/

export default SiteHeader;
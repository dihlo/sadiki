import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Row, Col, Popconfirm } from 'antd';
import { Menu, Icon } from 'antd';

import "./style.css";
import logo from './img/logo.jpg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SiteBigPicture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    	current: 'mail'
      }
      };

  render() {
    return (
    	<Row>
    		<Col span={24}>
    			<div className="bigfoto bigpic">
    				  <Col className="bigpic-welcome">
                <div className="bigpic-welcome-title">Добро пожаловать!</div>
                <div className="bigpic-welcome-desc">Детский сад “Доракс” - это место где Ваш ребенок будет развиваться и умственно,
и духовно. Безопасность гарантирована нашей командой специалистом в области
педагогики и развития ребенка.</div>
                <Col span={8} offset={8}>
                  <Button className="bigpic-welcome-button" ghost>Подробнее о детском саде</Button>
                </Col>
            </Col>
    			</div>
    		</Col>			
		</Row>
    );
  }
}

/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(SiteBigPicture);*/

export default SiteBigPicture;
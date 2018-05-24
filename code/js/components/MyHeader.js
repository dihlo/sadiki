import React from 'react';
import ReactDOM from "react-dom";
import { Menu, Icon, Layout, Avatar, Button, Col, Row } from 'antd';
import {toapi} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyHeader extends React.Component {
  /*componentDidMount() {
    this.props.toapi();
  }
*/
  /*login() {

    console.log(this.props.toapi());
  }*/

  render() {
    return (
        /*state = {
          current: 'mail',
        }
        handleClick = (e) => {
          console.log('click ', e);
          this.setState({
            current: e.key,
          });
        }*/
          <Menu
            style={{padding: '12px 0', }}
            onClick={this.handleClick}
            mode="horizontal"
          >
            <Row type="flex">
              <Col span={4}>
                <Avatar style={{margin: '0 24px', backgroundColor: '#87d068' }} icon="user" />
                <span>Дорофей</span>
              </Col>
              <Col offset={18} span={2}>
                <Button onClick={()=>{this.props.toapi()}/*this.login.bind(this)*/} style={{backgroundColor: '#87d068', color: '#fff' }}>Выход</Button>
              </Col>
            </Row>  
          </Menu>
    );
  }
}

function mapStateToProps(state) {
  const { rows, loading, error } = state.auth.authdata;
  return { rows, loading, error };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({toapi: toapi}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyHeader);


import React from 'react';
import ReactDOM from "react-dom";
import { Menu, Icon, Avatar } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyHeader extends React.Component {

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
          onClick={this.handleClick}
          mode="horizontal"
        >
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
          <Menu.Item key="User">
          </Menu.Item>
        </Menu>
    );
  }
}
export default MyHeader; 
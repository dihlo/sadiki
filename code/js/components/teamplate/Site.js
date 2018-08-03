import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SiteHeader from './SiteHeader';
import SiteBigPicture from './SiteBigPicture';
import Teachers from './Teachers';
import News from './News';
import Classes from './Classes';
import Contacts from './Contacts';
import Inventory from './Inventory';
import Footer from './Footer';
import { Button, Form, Table, Icon, Divider, Input, Row, Col, Popconfirm } from 'antd';

class Site extends React.Component {
    constructor(props) {
      super(props);
      };

  render() {
    return (
    <div>	
      <SiteHeader />
      <SiteBigPicture />
      <Teachers />
      <Classes />
      <News />
      <Inventory />
      <Contacts />
      <Footer />
    </div>  
    );
  }
}



/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(Site);*/

export default Site;
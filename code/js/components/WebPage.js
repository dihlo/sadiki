import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import Page from "../containers/renderPage";
import Pages from "../containers/Pages";
import { DatePicker, Layout} from 'antd';
import MySider from "./Sider";
import MyHeader from "./MyHeader";
import Diner from "./Diner";
import Schedule from "./Schedule";
import News from "./News";
import Teamplate from "./Teamplate";
import Users from "./Users";
import WrappedRegistrationForm from "./Form";
import { Row, Col } from 'antd';
import {connect} from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;


class Webpage extends React.Component {

renderPage (key) {
	switch (key) {
		case "1":
		return <Diner/>;
		break;
		case "2":
		return <Schedule/>;
		break;
		case "3":
		return <News/>;
		break;
		case "4":
		return <Teamplate/>;
		break;
		case "5":
		return <Users/>;
		break;
	default:
		return <Diner/>;
	}
}


 render() {
    return (
	<div>
	    <Layout>
	      	<MyHeader />
	      <Layout style={{background: '#fff', width: '256 px;' }}>
	      	<Row>
		      	<Col span={6}>
		        	<MySider />
		        </Col>
		        <Col span={12}>	
		        	{this.renderPage(this.props.pageID)}
		        </Col>	
	        </Row>	
	      </Layout>
	      <Footer style={{background: '#fff', }}>Footer</Footer>
	    </Layout>
	</div>
    );
  }	
}

function mapStateToProps(state) {
	const  {pageID}	 = state.active;
	return {
		pageID
	};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({}, dispatch)
}

export default connect(mapStateToProps, {})(Webpage);


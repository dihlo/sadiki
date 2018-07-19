import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import Page from "../containers/renderPage";
import Pages from "../containers/pages";
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
import { Switch, Route, withRouter } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;


class Webpage extends React.Component {

/*renderPage (key) {
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
}*/


 render() {
    return (
	<div>
	    <Layout>
	      	<MyHeader />
			<Layout style={{background: '#fff', width: '256 px;' }}>
				<Row>
			  	<Col span={4}>
			    	<MySider />
			    </Col>
			    <Col span={20}>
					<Switch>
						<Route exact path='/' component={Diner}/>
						<Route path='/diner' component={Diner}/>
						<Route path='/news' component={News}/>
						<Route path='/schedule' component={Schedule}/>
						<Route path='/template' component={Teamplate}/>
						<Route path='/user' component={Users}/>
						<Route path='/camera' component={Diner}/>
					</Switch>
			    	{/*this.renderPage(this.props.pageID)*/}
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
	const  {pageID}	 = state.pagesselect;
	return {
		pageID
	};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({}, dispatch)
}

export default withRouter(connect(mapStateToProps, {})(Webpage));


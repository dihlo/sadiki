import React from 'react';
import {Layout} from 'antd';
import MySider from "./Sider";
import MyHeader from "./MyHeader";
import Diner from "./Diner";
import Schedule from "./Schedule";
import News from "./News";
import Teamplate from "./Teamplate";
import Users from "./Users";
import Profile from "./Profile";
import Site from "./teamplate/Site";
import Camera from "./Camera";
import Closepart from "./closepart/Closepart";
import Login from "./Login";
import { Row, Col } from 'antd';
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import './login.css'

const { Footer } = Layout;


class Webpage extends React.Component {

render() {
    return (
	<div>
	    <Layout>
	      	<MyHeader />
			<Layout style={{ background: '#fff' }}>
				<Row>
			  	<Col span={4}>
			    	<MySider />
			    </Col>
			    <Col span={20} style={{ paddingTop: '20px' }}>
					<Switch>
						<Route exact path='/' component={Diner}/>
						<Route path='/diner' component={Diner}/>
						<Route path='/news' component={News}/>
						<Route path='/schedule' component={Schedule}/>
						<Route path='/template' component={Teamplate}/>
						<Route path='/user' component={Users}/>
						<Route path='/camera' component={Camera}/>
						<Route path='/profile' component={Profile}/>
						<Route path='/landing' component={Site}/>
						<Route path='/closepart' component={Closepart}/>
						<Route path='/login' component={Login}/>
					</Switch>
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

export default withRouter(connect(mapStateToProps, {})(Webpage));


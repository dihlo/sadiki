import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import Page from "../containers/renderPage";
import Pages from "../containers/Pages";
import { DatePicker, Layout} from 'antd';
import MySider from "./Sider";
import MyHeader from "./MyHeader";
import WrappedRegistrationForm from "./Form";
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Webpage = () => (

	<div>
	    <Layout>
	      	<MyHeader />
	      <Layout style={{background: '#fff', width: '256 px;' }}>
	      	<Row>
		      	<Col span={6}>
		        	<MySider />
		        </Col>
		        <Col span={12}>	
		        	<WrappedRegistrationForm />
		        	<Pages />
		        	<Page />
		        </Col>	
	        </Row>	
	      </Layout>
	      <Footer style={{background: '#fff', }}>Footer</Footer>
	    </Layout>
	</div>
);

export default Webpage;
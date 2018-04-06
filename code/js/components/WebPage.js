import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import { DatePicker, Layout} from 'antd';
import MySider from "./Sider";
import MyHeader from "./MyHeader";
import WrappedRegistrationForm from "./Form";
const { Header, Footer, Sider, Content } = Layout;

const Webpage = () => (

	<div>
	    <Layout>
	      <Header style={{background: '#fff',}}>
	      	<MyHeader />
	      </Header>
	      <Layout style={{background: '#fff', width: '256 px;' }}>
	        <Sider style={{background: '#fff', width: '256 px;' }}>
	        	<MySider />	
	        </Sider>
	        <Content>
	        	<WrappedRegistrationForm />
	        </Content>
	      </Layout>
	      <Footer style={{background: '#fff', }}>Footer</Footer>
	    </Layout>
	</div>
);

export default Webpage;
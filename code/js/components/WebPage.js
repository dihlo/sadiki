import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import { DatePicker } from 'antd';
import Sider from "./Sider";
import MyHeader from "./MyHeader";

const Webpage = () => (
	<div>
		<Layout>
			<Layout>
				<MyHeader />
			</Layout>
			<Layout>	
				<Sider />
			</Layout>
		</Layout>
	</div>
);

export default Webpage;
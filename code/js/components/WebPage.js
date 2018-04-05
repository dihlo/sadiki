import React from 'react';
import ReactDOM from "react-dom";
import CarsList from "../containers/car-list";
import Details from "../containers/details";
import { DatePicker } from 'antd';
import Sider from "./Sider";
import MyHeader from "./MyHeader";

const Webpage = () => (
	<div>
		<MyHeader />
		<Sider />
	</div>
);

export default Webpage;
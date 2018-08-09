import React from 'react';
import MenuClose from "./SubMenu";
import { Button, Row, Col, Popconfirm } from 'antd';
import {Link, IndexLink} from 'react-router';

function News(props) {
	return (
		<div className="background">
			<SubMenu />
			Новости
		</div>	
	);
}

export default News;
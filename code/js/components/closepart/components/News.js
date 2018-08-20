import React from 'react';
import MenuClose from "./SubMenu";
import NewsItem from "./NewsItem";
import { Layout, Button, Row, Col, Popconfirm } from 'antd';
import {Link, IndexLink} from 'react-router';

class News extends React.Component {
	render() {
	return (
		<div>
			<Row>
				<Col span={2}>
					<MenuClose />
				</Col>
				<Col offset={1} span={21}>
				<p className="section-title">Новости</p>
				</Col>
				<Col span={6} offset={1}>
					<NewsItem/>
				</Col>
				<Col span={6} offset={1}>
					<NewsItem/>
				</Col>
				<Col span={6} offset={1}>
					<NewsItem/>
				</Col>								
			</Row>
		</div>	
	);
	}
}

export default News;
import React from 'react';
import MenuClose from "./SubMenu";
import {Link, IndexLink} from 'react-router';
import { Layout, Button, Row, Col, Popconfirm } from 'antd';

import '../css/newsone.css';
import url from '../../teamplate/img/inv4.jpg';

class NewsItem extends React.Component{
	render(){
		return(
			<div className="background">
				<Row>
					<Col span={24}>
						<p className="newsitem-title">В Кремле прокомментировали возможное усиление санкций США </p>
					</Col>
					<Col span={24}>
						<img className="newsitem-picture" src={url}/>
					</Col>
					<Col span={24}>
						<p className="newsitem-alltext">
							<span className="newsitem-date"> 13 июня 2018 г.</span>
							<span className="newsitem-text"> В Кремле внимательно отслеживают ситуацию с возможным усилением санкций США против России, заявил пресс-секретарь президента Дмитрий Песков
		</span>							
						</p>
					</Col>
					<Col span={24}>
						<Button>Подробнее</Button>
					</Col>										
				</Row>
			</div>
	);
	}
}

export default NewsItem;
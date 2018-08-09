import React from 'react';
import MenuClose from "./SubMenu";
import {Link, IndexLink} from 'react-router';
import Calendar from "./Calendar";
import FoodSingle from './FoodComponents/FoodSingle';
import foods from './FoodComponents/foods';
import { Button, Row, Col, Popconfirm } from 'antd';

import '../css/food.css';

function Food(props) {
	return (
		<div className="background">
			<Row>
				<Col span={2}>
					<MenuClose />
				</Col>
				<div className="food">
					<Row>
						<Col span={10} offset={1}>
							<p className="section-title">Питание</p>
							<div className="food-wrapper">
								<p className="food-today">На сегодня, 9 июня, Пятница</p>
								{foods.map(food => <FoodSingle key={food.id} type={food.type} meals={food.meals} />)}
							</div>
						</Col>
						<Col span={10} offset={1}>
							<div className="calendar-wrapper">
								<Calendar />
							</div>
						</Col>
					</Row>		
				</div>
			</Row>	
		</div>	
	);
}

export default Food;
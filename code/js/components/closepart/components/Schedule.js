import React from 'react';
import SubMenu from "./SubMenu";
import CompletedMaterial from "./CompletedMaterial";
import SheduleDay from "./SheduleDay";
import Calendar from "./Calendar";
import MenuClose from "./SubMenu";
import { Button, Row, Col, Popconfirm } from 'antd';

function Schedule(props) {
	return (
		<div className="background schedule">
			<Row>
				<Col span={2}>
					<MenuClose />
				</Col>
				<Row>
					<CompletedMaterial />
					<SheduleDay />
					<div className="calendar-wrapper">
						<Calendar />
					</div>
				</Row>
			</Row>
		</div>
	);
}

export default Schedule;
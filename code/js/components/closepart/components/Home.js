import React from 'react';
import MenuClose from "./SubMenu";
import {Link, IndexLink} from 'react-router';
import { Layout, Button, Row, Col, Popconfirm } from 'antd';

//import 'react-html5video/dist/styles.css';
//import { DefaultPlayer as Video } from 'react-html5video';
import { Player, BigPlayButton } from 'video-react';
import ReactDisqus from 'react-disqus';
import RecordSingle from './StreamComponents/RecordSingle';
import records from './StreamComponents/records';

import '../css/stream.css';

class Home extends React.Component{
	render() {
	return (
		<div className="background">	
				<Row>
					<Col span={2}>
						<MenuClose />
					</Col>
					<div className="stream">
						<Col span={12} offset={1}>
							<p className="section-title">Трансляция игровой</p>
							<div className="stream-wrapper">
					            <Player>
					              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
					              <BigPlayButton position="center" />
					            </Player> 
							</div>
							<div className="disqus-wrapper">
								<ReactDisqus shortname='Test' identifier="123" />
							</div>
						</Col>
						<Col span={7} offset={1}>
							<p className="section-title">Записи камер</p>
							{records.map(record => <RecordSingle key={record.id} date={record.date} timeStart={record.timeStart} timeFinish={record.timeFinish} />)}
						</Col>
					</div>
				</Row>
		</div>	
	);		
	}
}

export default Home;
import React, { Component } from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';

import ClassesCard from './ClassesCard';

import './style.css';

class Classes extends Component {
    render() {
    return(
        <Row className="classes">
            <Col >
                <p className="classes__title">Классы</p>
            </Col>
            <Row>
                <Col span={20} offset={2}>
                    <ClassesCard />
                </Col>
                <Col span={20} offset={2}>    
                    <ClassesCard />
                </Col>
            </Row>
        </Row>
    )
    }
}

export default Classes;
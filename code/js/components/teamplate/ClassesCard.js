import React, { Component } from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';

import './style.css';
import url from './img/inv2.jpg';

class ClassesCard extends Component {
    render() {
    return(
        <Row className="classes__card">
            <Col className="classes__text" span={18}>
                <div className="classes__card-title">Игровая</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores laudantium nihil expedita autem, alias adipisci vitae culpa ullam voluptate voluptatum.
                <br/><br/>
                <button className="classes__button">Подробнее</button>
            </Col>
            <Col className="classes__image" span={6} right>
                <img className="classes__image-img" src={url} alt=""/>
            </Col>
        </Row>
    )
    }
}

export default ClassesCard;
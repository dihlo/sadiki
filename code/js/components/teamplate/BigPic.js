import React, {Component} from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';

import './style.css';

class BigPic extends React.Component {
    render() {
    return (
        <Row className="bigpic">
            <Col className="bigpic__welcome">
                <div className="bigpic__welcome-title">Добро пожаловать!</div>
                <div className="bigpic__welcome-desc">Детский сад “Доракс” - это место где Ваш ребенок будет развиваться и умственно,
и духовно. Безопасность гарантирована нашей командой специалистом в области
педагогики и развития ребенка.</div>
                <div className="bigpic__welcome-button">
                    <div className="bigpic__welcome-button-caption">
                        Подробнее о детском саде
                    </div>
                </div>
            </Col>
        </Row>
    )
    }
}

export default BigPic;
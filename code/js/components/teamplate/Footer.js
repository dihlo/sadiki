import React, { Component } from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';

import './style.css';

class Footer extends Component {
  
  render() {
    return (
        <Row className="footer">
            <Row>  
               <Col span={12}>
                    <p className="footer-left">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и про</p>
                </Col>
                <Col span={12} className="social-images">
                    <a href={''}><img src="./images/vk.png" alt="VK"/></a>
                    <a href={''}><img src="./images/instagram.png" alt="Instagram"/></a>
                    <a href={''}><img src="./images/facebook.png" alt="Facebook"/></a>
                    <a href={''}><img src="./images/twitter.png" alt="Twitter"/></a>
                </Col>
            </Row>    
            <div>
                <p className="copyright">© Детский сад “Доракс” 2017</p>
            </div>
        </Row>    
    );
  }
}

export default Footer;
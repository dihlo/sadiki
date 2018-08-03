import React, { Component } from 'react';
import MapContacts from './MapContacts';
import { Button, Row, Col, Popconfirm } from 'antd';
import './style.css';
 
class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            cssClass: 'google-map no-click'
        }
    }
    
    
    enableMap(e) {
        this.setState({cssClass: 'google-map clicked'});
    }

    render() {
        return (
            <Row className="contacts">                    
                <Row>
                    <Col>
                        <p className="section-title">Контакты</p>
                    </Col>
                </Row>                    
                <div className={this.state.cssClass} onClick={this.enableMap.bind(this)}>
                    <MapContacts />    
                </div>
            </Row>
        );
    }
}

export default Contacts;
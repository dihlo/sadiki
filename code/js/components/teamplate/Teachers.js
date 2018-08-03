import React, { Component } from 'react';
import TeacherItem from './TeacherItem';
import {connect} from 'react-redux';
import { Button, Row, Col, Popconfirm } from 'antd';

import "./style.css";

class Teachers extends Component {
  
  render() {
    return (
      <Row className="teachers teachers-main">
        <Col>
            <p className="section-title">Педагоги</p>
        </Col>
        <Row type="flex" justify="space-around">
            <Col span={6}>
                <TeacherItem />
            </Col>
            <Col span={6}>
                <TeacherItem />
            </Col>
            <Col span={6}>
                <TeacherItem />
            </Col>
        </Row>    
      </Row>
    );
  }
}

/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(Teachers);*/

export default Teachers;
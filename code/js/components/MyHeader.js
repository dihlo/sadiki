import React from 'react';
import { Avatar, Button, Col, Row } from 'antd';
import {toapi} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class MyHeader extends React.Component {

    render() {
        return (
            <div
                style={{padding: '12px 0', backgroundColor: 'white', lineHeight: '46px', borderBottom: '1px solid #e8e8e8' }}
                onClick={this.handleClick}
                mode="horizontal"
            >
                <Row type="flex">
                <Col span={8}>
                    <Link to={'/profile'} style={{color: '#000'}}>
                        <Avatar style={{margin: '0 24px', backgroundColor: '#87d068' }} icon="user" />
                        <span>Александр Саввинов</span>
                    </Link>
                </Col>
                <Col offset={14} span={2}>
                    <Button onClick={()=>{this.props.toapi()}} style={{backgroundColor: '#87d068', color: '#fff' }}>Выход</Button>
                </Col>
                </Row>  
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { rows, loading, error } = state.auth.authdata;
  return { rows, loading, error };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({toapi: toapi}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyHeader);


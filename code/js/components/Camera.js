import React from 'react';
/*import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';*/
import Titles from "./Titles";
import { Table, Icon, Divider, Row, Col, Popconfirm } from 'antd';
import { Player, BigPlayButton } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Camera extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }};

   render() {
    return (
      <div>
        <Row >
          <Col 
            offset={1} 
            span={11}
            style={{ paddingTop: 20, paddingBottom: 20}}
          >
            <Titles/>            
          </Col>
        </Row> 
        <Row>
          <Col offset={1} span={10}>
            <div> Камера № 1</div>        
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center" />
            </Player>            
          </Col>
          <Col offset={1} span={10}>
            <div> Камера № 2</div>        
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center" />
            </Player>            
          </Col>
        </Row>
      </div>
    );
  }
}



/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {
 
}

export default connect(mapStateToProps, matchDispatchToProps)(Camera);*/

export default Camera;

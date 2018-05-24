import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DinerData from '../reducers/DinerTableData';
import ModalDiner from "./ModalDiner";
import Titles from "./Titles";
import { Table, Icon, Divider, Row, Col } from 'antd';
import {meals} from '../actions/meals';


      const columns = [{
        title: 'Имя',
        dataIndex: 'name',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      }, 
      {
        title: 'Калории',
        dataIndex: 'calories',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
      }, 
      { 
        title: 'Дата',
        dataIndex: 'updated_at',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      },

      ];

      function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }


class Diner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          confirmDirty: false,
          autoCompleteResult: [],
        };

   }

    componentDidMount() {
      this.props.meals();
    }

    tableData() {
    var arr = [];
    for (var key in this.props.data) {
      arr.push(this.props.data[key]);
    }
      
      return arr;

      /*arr.map((element, i) => {
        console.log(element.name);
      });*/
    }
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
          <Col
            span={11}
            style={{textAlign: 'right'}}
          >
            <ModalDiner/>            
          </Col> 
        </Row> 
        <Row>
          <Col offset={1} span={22}>        
            <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={this.tableData()} onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}



function mapStateToProps(state) {
  const {data, loading} = state.meals.mealsData;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({meals: meals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Diner);


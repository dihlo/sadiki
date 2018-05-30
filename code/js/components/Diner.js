import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DinerData from '../reducers/DinerTableData';
import ModalDiner from "./ModalDiner";
import Titles from "./Titles";
import { Table, Icon, Divider, Row, Col, Popconfirm } from 'antd';
import {meals} from '../actions';
import {deletemeals} from '../actions/deletemeals';


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

let dataSource = [];

class Diner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],

      };
      this.columns = [{
        title: 'Имя',
        dataIndex: 'name',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        render: text => <a href="javascript:;">{text}</a>,
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
      {
        title: 'Редактировать',
        dataIndex: "id",
        width: 150,
        render: (text, record, index) => {
              return (
                <span>
                  <a href="javascript:;"><Icon type="edit" /></a>
                  <Divider type="vertical" />
                  <Popconfirm title="Точно удалить?" onConfirm={() => this.onDelete(text)}>
                     <a href="javascript:;"><Icon type="delete" /></a>
                  </Popconfirm>
                </span>
              ) },
      }];

    }

    componentDidMount() {
      this.props.meals();
    }

    onDelete(id) {
      this.props.deletemeals(id);
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
            <Table pagination={{ pageSize: 10 }} columns={this.columns} dataSource={this.props.data} onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}



function mapStateToProps(state) {
  const {data, loading} = state.meals.mealsData;
  const {deletedata, deleteloading} = state.deletemeals.mealsDelete;
  return {data, loading, deletedata, deleteloading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({meals: meals, deletemeals:deletemeals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Diner);


import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DinerData from '../reducers/DinerTableData';
import ModalDiner from "./ModalDiner";
import EditableTextCell from "./EditableTextCell";
import Titles from "./Titles";
import { Button, Form, Table, Icon, Divider, Input, Row, Col, Popconfirm } from 'antd';
import {meals, deletemeals, putmeals, sendputmeals} from '../actions';

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
        isEditableMap: {},
        editable: 0,
      };

      this.handleSave = this.handleSave.bind(this);

      this.columns = [{
        title: 'Имя',
        dataIndex: 'name',
        /*onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,*/
        render: (text, record, index) => this.renderTextColumn(record, index, "name", text),
      }, 
      {
        title: 'Калории',
        dataIndex: 'calories',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.calories - b.calories,
        render: (text, record, index) => this.renderTextColumn(record, index, "calories", text),
      },
      {
        title: 'Описание',
        dataIndex: 'description',
        render: (text, record, index) => this.renderTextColumn(record, index, "description", text),
      }, 
      { 
        title: 'Дата',
        dataIndex: 'meal_date',
        editable: false,
        /*onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,*/
        render: (text, record, index) => this.renderTextColumn(record, index, "meal_date", text),
      },
      { 
        title: 'Вес',
        dataIndex: 'weight',
        editable: false,
        /*onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,*/
        render: (text, record, index) => this.renderTextColumn(record, index, "weight", text),
      },      
      {
        title: 'Редактировать',
        dataIndex: "id",
        width: 150,
        render: (text, record, index) => this.renderActionColumn(record),
        /*render: (text, record, index) => {
              return (
                <span>
                  <a href="javascript:;"><Icon type="edit" /></a>
                  <Divider type="vertical" />
                  <Popconfirm title="Точно удалить?" onConfirm={() => this.onDelete(text)}>
                     <a href="javascript:;"><Icon type="delete" /></a>
                  </Popconfirm>
                </span>
                <a htmlType="submit" onClick={() => this.handleSave(record)}><Icon type="save" /></a>
              ) },*/
      }];

    }

    renderActionColumn(record) {
        const editable = this.state.editable;

        return (
            <div>
                {
                    editable == record.id ?                    
                        <span>
                            <a onClick={() => this.SendPut(record)}><Icon type="save" /></a>                           
                        </span>
                    :
                        <span>
                            <a onClick={() => this.handleEdit(record)}><Icon type="edit" /></a>
                            <Divider type="vertical" />
                            <Popconfirm title="Точно удалить?" onConfirm={() => this.onDelete(record.id)}>
                               <a href="javascript:;"><Icon type="delete" /></a>
                            </Popconfirm>
                        </span>
                }
            </div>
        );
    }

    renderTextColumn(record, index, key, text) {
       const editable = this.state.editable;
       const keyname = key;
       return (
           <EditableTextCell
                editable={editable == record.id}
                value={text}
                id = {record.id}
                keyname = {keyname}
                handleChange={value => this.handleChange(record, key, value)}
           />
       );
    }

    handleEdit(record) {
        console.log('handleEdit');
        console.log(this.props);        
        this.setState({editable: record.id});
    }

    handleSave(record) {
        console.log('handleSave');
        this.setState({editable: 0});
    }


    componentDidMount() {
      this.props.meals();
    }

    SendPut(record) {
      let sendobj = Object.assign(record, this.props.payload);
      this.props.sendputmeals(sendobj); 
      this.setState({editable: 0});     
    }

    onDelete(id) {
      this.props.deletemeals(id);
    }
    tableData() {
      //alert('tabledata');
      //console.log(this.props.data);
    }

  render() {
    this.tableData();
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
  const {putdata, putloading, payload, payloadcalories, payloadupdatedat}=state.putmeals.mealsPut;
  return {data, loading, deletedata, deleteloading, putdata, putloading, payload, payloadcalories, payloadupdatedat};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({meals: meals, deletemeals:deletemeals, putmeals:putmeals, sendputmeals:sendputmeals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Diner);


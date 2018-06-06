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
import {meals, deletemeals, putmeals} from '../actions';

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
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        render: text => <a href="javascript:;">{text}</a>,
      }, 
      {
        title: 'Калории',
        dataIndex: 'calories',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: (text, record, index) => this.renderTextColumn(record, index, "calories", text),
      }, 
      { 
        title: 'Дата',
        dataIndex: 'updated_at',
        editable: false,
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        render: (text, record, index) => this.renderTextColumn(record, index, "updated_at", text),
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
                            <Button type="primary" htmlType="submit" onClick={() => this.handleSave(record)}><Icon type="save" /></Button>                           
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
        // Save to API
        // APIUtils.saveRecord(record);
        this.setState({editable: 0});

        /*const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          console.log('Received values of form: ', values);
          console.log('Name: ', values.name);
          console.log('Calorie: ', values.calorie);
          this.props.postmeals(values.name, values.calorie);
          this.props.meals();
          form.resetFields();
          this.setState({ visible: false });
        });*/
    }


    componentDidMount() {
      this.props.meals();
    }

    onDelete(id) {
      this.props.deletemeals(id);
    }
    tableData() {
      console.log(this.props.data);
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
  return {data, loading, deletedata, deleteloading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({meals: meals, deletemeals:deletemeals, putmeals:putmeals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Diner);


import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import ModalDiner from "./ModalDiner";
import Titles from "./Titles";
import { Table, Icon, Divider, Row, Col } from 'antd';


      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'Jim',
          value: 'Jim',
        }, {
          text: 'Submenu',
          value: 'Submenu',
          children: [{
            text: 'Green',
            value: 'Green',
          }, {
            text: 'Black',
            value: 'Black',
          }],
        }],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      }, 
      {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
      }, 
      {
        title: 'Address',
        dataIndex: 'address',
        filters: [{
          text: 'London',
          value: 'London',
        }, {
          text: 'New York',
          value: 'New York',
        }],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
      },
      { 
        title: 'Дата',
        dataIndex: 'date',
        filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'Jim',
          value: 'Jim',
        }],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      },

      ];

      const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      }];

      function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }


class News extends React.Component {
    constructor(props) {
        super(props);
        /*this.state = {
          confirmDirty: false,
          autoCompleteResult: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);*/
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
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(News);


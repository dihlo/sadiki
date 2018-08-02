import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ModalSchedules from "./ModalSchedule";
import EditableTextCellSchedule from "./EditableTextCellSchedule";
import Titles from "./Titles";
import { Table, Icon, Divider, Row, Col, Popconfirm } from 'antd';
import {schedules, deleteschedules, putschedules, sendputschedules} from '../actions';

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Schedule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
        isEditableMap: {},
        editableSchedule: 0,
      };

      this.handleSave = this.handleSave.bind(this);

      this.columns = [{
        title: 'Имя',
        dataIndex: 'name',
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
        render: (text, record, index) => this.renderTextColumn(record, index, "meal_date", text),
      },
      { 
        title: 'Вес',
        dataIndex: 'weight',
        editable: false,
        render: (text, record, index) => this.renderTextColumn(record, index, "weight", text),
      },      
      {
        title: 'Редактировать',
        dataIndex: "id",
        width: 150,
        render: (text, record, index) => this.renderActionColumn(record),
      }];

    }

    renderActionColumn(record) {
        const editable = this.state.editableSchedule;

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
       const editable = this.state.editableSchedule;
       const keyname = key;
       return (
           <EditableTextCellSchedule
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
        this.setState({editableSchedule: record.id});
    }

    handleSave(record) {
        console.log('handleSave');
        this.setState({editableSchedule: 0});
    }


    componentDidMount() {
      this.props.schedules();
    }

    SendPut(record) {
      let sendobj = Object.assign(record, this.props.payload);
      this.props.sendputschedules(sendobj); 
      this.setState({editableSchedule: 0});     
    }

    onDelete(id) {
      this.props.deleteschedules(id);
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
                    <ModalSchedules />            
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
  const {data, loading} = state.schedules.schedulesData;
  const {deletedata, deleteloading} = state.deleteschedules.schedulesDelete;
  const {putdata, putloading, payload, payloadcalories, payloadupdatedat}=state.putschedules.schedulesPut;
  return {data, loading, deletedata, deleteloading, putdata, putloading, payload, payloadcalories, payloadupdatedat};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ schedules: schedules, deleteschedules:deleteschedules, putschedules:putschedules, sendputschedules:sendputschedules}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Schedule);


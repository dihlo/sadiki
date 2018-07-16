import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DinerData from '../reducers/DinerTableData';
import NewsAdd from "./NewsAdd";
import EditableTextCellNews from "./EditableTextCellNews";
import Titles from "./Titles";
import { Button, Form, Table, Icon, Divider, Input, Row, Col, Popconfirm } from 'antd';
import {news, deletenews, putnews, sendputnews} from '../actions';

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

let dataSource = [];

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAddNews: false,
        confirmDirty: false,
        autoCompleteResult: [],
        isEditableMap: {},
        editable: 0,
      };

      this.handleSave = this.handleSave.bind(this);
      this.onClickAddNews = this.onClickAddNews.bind(this);
      this.onCloseAddNews = this.onCloseAddNews.bind(this);

      this.columns = [{
        title: 'Заголовок',
        dataIndex: 'title',
        /*onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,*/
        render: (text, record, index) => this.renderTextColumn(record, index, "title", text),
      }, 
      {
        title: 'Текст новости',
        dataIndex: 'body',
        defaultSortOrder: 'descend',
        //sorter: (a, b) => a.calories - b.calories,
        render: (text, record, index) => this.renderTextColumn(record, index, "body", text),
      },
      {
        title: 'Опубликованно',
        dataIndex: 'publish',
        render: (text, record, index) => this.renderTextColumn(record, index, "publish", text),
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
           <EditableTextCellNews
                editable={editable == record.id}
                value={text}
                id = {record.id}
                keyname = {keyname}
                handleChange={value => this.handleChange(record, key, value)}
           />
       );
    }

    renderNewsPage(props) {
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
              <Button type="primary" onClick={this.onClickAddNews}>Добавить</Button>
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

    renderNewsAdd(props) {
      this.tableData();
      return (
          <div>
            <NewsAdd onCloseAddNews={() => this.onCloseAddNews()}/>
        </div>
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
      this.props.news();
    }

    SendPut(record) {
      console.log('this.props.payload');
      console.log(this.props.payload);
      let sendobj = Object.assign(record, this.props.payload);
      this.props.sendputnews(sendobj); 
      this.setState({editable: 0});     
    }

    onDelete(id) {
      this.props.deletenews(id);
    }
    tableData() {
      console.log(this.props.data);
    }

    onClickAddNews() {
      console.log('onClickAddNews');
      this.setState({isAddNews: true});
    }

    onCloseAddNews() {
      console.log('onCloseAddNews');
      this.setState({isAddNews: false});
    }

  render() {
    this.tableData();
    let isAddNews = this.state.isAddNews;
    return (
      <div>
        {isAddNews ? (
          this.renderNewsAdd()
          ) : (
          this.renderNewsPage()
          )}
      </div>
    );
  }
}



function mapStateToProps(state) {
  const {data, loading} = state.news.newsData;
  const {deletedata, deleteloading} = state.deletenews.newsDelete;
  const {putdata, putloading, payload, payloadcalories, payloadupdatedat}=state.putnews.newsPut;
  return {data, loading, deletedata, deleteloading, putdata, putloading, payload, payloadcalories, payloadupdatedat};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({news: news, deletenews:deletenews, putnews:putnews, sendputnews:sendputnews}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(News);


import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DinerData from '../reducers/DinerTableData';
import Titles from "./Titles";
import { Button, Form, Table, Icon, Divider, Input, Row, Col, Popconfirm } from 'antd';
import {putnews} from '../actions';

const FormItem = Form.Item;

class EditableTextCellNews extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    }
    }

    handleChange (e) {
        const {id} = this.props;
        const {keyname} = this.props;
        const value = e.target.value;

        this.props.putnews(value, id, keyname);

        this.setState({value: e.target.value});
    }



    render() {

        const { editable } = this.props;
        const { value } = this.state;
        const {id} = this.props;
        const {keyname} = this.props;

        return (
            <div>
                { editable ?
                    <div>
                        <Form>
                          <FormItem>
                              <Input value={value} type="textarea" onChange={this.handleChange.bind(this)} />
                          </FormItem>
                        </Form>
                    </div>
                    :
                    <div className="editable-row-text">
                        {value}
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {    
  return state;
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({putnews:putnews}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EditableTextCellNews);


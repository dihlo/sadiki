import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import Titles from "./Titles";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {news, deletenews, putnews, sendputnews} from '../actions';


const FormItem = Form.Item;

class Login extends React.Component {
  /*handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }*/

  render() {
    //const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Введите имя пользователя" />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Введите пароль" />
        </FormItem>
        <FormItem>
          <Checkbox>Запомнить меня</Checkbox>
          <a className="login-form-forgot" href="">Забыли пароль</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Войти
          </Button>
          или <a href="">Регистрация</a>
        </FormItem>
      </Form>
    );
  }
}



function mapStateToProps(state) {
  return {};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
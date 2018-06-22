import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import Titles from "./Titles";
import PictureLoader from "./PictureLoader";
import CardTeamplate from "./CardTeamplate";
import { Form, Icon, Divider, Row, Col, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class TeamplateForm extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
          </Col> 
        </Row> 
        <Row>
          <Col offset={1} span={22}> 
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Пожалуйста укажите имя детсада' }],
                })(
                  <Input placeholder="Имя детсада" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('description', {
                  rules: [{ required: true, message: 'Пожалуйста введите описание детсада' }],
                })(
                  <TextArea placeholder="Описание" rows={4} />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('contacts', {
                  rules: [{ required: true, message: 'Пожалуйста укажите контакты детсада' }],
                })(
                  <TextArea placeholder="Контакты" rows={4} />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Teachers', {
                  rules: [{ required: true, message: 'Пожалуйста заполните данные преподователей' }],
                })(
                  <div>
                    <p><b>Преподователи</b></p>
                    <PictureLoader/>
                    <Input placeholder="Имя преподователя" />
                    <TextArea placeholder="Описание преподователя" rows={4} />                    
                  </div>

                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Inventory', {
                  rules: [{ required: true, message: 'Пожалуйста заполните данные инвентаря' }],
                })(
                  <div>
                    <p><b>Инвентарь</b></p>
                    <PictureLoader/>
                    <Input placeholder="Имя инвентаря" />
                    <TextArea placeholder="Описание инвентаря" rows={4} />                    
                  </div>

                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('classes', {
                  rules: [{ required: true, message: 'Пожалуйста заполните данные кружков или уроков' }],
                })(
                  <div>
                    <p><b>Кружки, уроки</b></p>
                    <PictureLoader/>
                    <Input placeholder="Имя кружков или уроков" />
                    <TextArea placeholder="Описание кружков или уроков" rows={4} />                    
                  </div>

                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('documents', {
                  rules: [{ required: true, message: 'Пожалуйста загрузите документы' }],
                })(
                  <div>
                    <p><b>Документы</b></p>
                    <PictureLoader/>               
                  </div>

                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('siteteamplate', {
                  rules: [{ required: true, message: 'Пожалуйста выберете шаблон' }],
                })(
                  <div>
                    <p><b>Шаблоны</b></p>
                    <Row>
                      <Col span={6}>
                        <CardTeamplate/>
                      </Col>  
                      <Col span={6}>
                        <CardTeamplate/>
                      </Col>  
                      <Col span={6}>
                        <CardTeamplate/>
                      </Col>  
                      <Col span={6}>
                        <CardTeamplate/>
                      </Col>  
                    </Row>                
                  </div>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Создать
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const Teamplate = Form.create()(TeamplateForm);

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Teamplate);

/*import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);*/
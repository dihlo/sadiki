import React from 'react';
import ReactDOM from "react-dom";
import { Modal, Button } from 'antd';
import { Form, Icon, Input} from 'antd';
import {connect} from 'react-redux';
import {meals} from '../actions/meals';
import {bindActionCreators} from 'redux';
const FormItem = Form.Item;

export class RenderModalDiner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ModalText: 'Content of the modal',
          visible: false,
          confirmLoading: false,
          loading: false,
        };

        /*this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);  */ 
  
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }

    hasErrors(fieldsError) {
      return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    showModal() {
      this.setState({
        visible: true,
      });
    }
 
    handleOk() {
      this.setState({
        ModalText: 'Введите прием пищи',
        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    }

    handleCancel () {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    }

    handleSubmit(e) {
      console.log('Я в сабмите ', values);
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });      
    } 

    render() {
      const { visible, confirmLoading, ModalText, loading } = this.state;
      const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
      // Only show error after a field is touched.
      const userNameError = isFieldTouched('userName') && getFieldError('userName');
      const passwordError = isFieldTouched('password') && getFieldError('password');
 
      return (
        <div style={{ paddingTop: 20, paddingBottom: 20, }}>
          <Button type="primary" onClick={this.showModal}>Добавить</Button>
          <Modal title="Введите прием пищи"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            footer={[
            <Button key="back" onClick={this.handleCancel}>Отменить</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Добавить
            </Button>,
          ]}
          >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input placeholder="Имя" />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input placeholder="Калории" />
              )}
            </FormItem>
          </Form>
          </Modal>
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


const ModalDiner = Form.create()(RenderModalDiner);

export default connect(mapStateToProps, matchDispatchToProps)(ModalDiner);

//export default ModalDiner; 
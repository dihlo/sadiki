import React from 'react';
import ReactDOM from "react-dom";
import { Modal, Button } from 'antd';
import { Form, Icon, Input} from 'antd';
import {connect} from 'react-redux';
import {postmeals, meals} from '../actions';
import {bindActionCreators} from 'redux';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Добавление приема пищи"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Имя">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Поле обезательное, укажите наименование приема пищи' }],
              })(
                <Input type="textarea"/>
              )}
            </FormItem>
            <FormItem label="Калории">
              {getFieldDecorator('calorie', {
                rules: [{ required: true, message: 'Поле обезательное, укажите калорийность' }],
              })(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class ModalDiner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ModalText: 'Content of the modal',
          visible: false,
          confirmLoading: false,
          loading: false,
        };

      this.showModal = this.showModal.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
      this.saveFormRef = this.saveFormRef.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleCancel () {
    this.setState({ visible: false });
  }

  handleCreate () {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      /*console.log('Received values of form: ', values);
      console.log('Name: ', values.name);
      console.log('Calorie: ', values.calorie);*/
      this.props.postmeals(values.name, values.calorie);
      this.props.meals();
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef (formRef) {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Добавить</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {data, loading} = state.postmeals.mealsPost;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({postmeals: postmeals, meals: meals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalDiner);

/*const FormItem = Form.Item;

export class RenderModalDiner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ModalText: 'Content of the modal',
          visible: false,
          confirmLoading: false,
          loading: false,
        };

  
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

//export default ModalDiner; */
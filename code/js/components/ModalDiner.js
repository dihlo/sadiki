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
          okText="Добавить"
          cancelText="Отмена"
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
    /*form.validateFields((err, values) => {
      if (err) {
        return;
      }

     console.log('Received values of form: ', values);
      console.log('Name: ', values.name);
      console.log('Calorie: ', values.calorie);
      this.props.postmeals(values.name, values.calorie);
      this.props.meals();
      form.resetFields();
      this.setState({ visible: false });
    });*/
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

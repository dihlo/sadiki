import React from 'react';
import ReactDOM from "react-dom";
import { Modal, Button } from 'antd';

export class ModalDiner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ModalText: 'Content of the modal',
          visible: false,
          confirmLoading: false,
        };

        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
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
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div style={{ paddingTop: 20, paddingBottom: 20, }}>
        <Button type="primary" onClick={this.showModal}>Добавить</Button>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default ModalDiner; 
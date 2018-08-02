import React from 'react';
import ReactDOM from "react-dom";
import { Modal, Button } from 'antd';
import { Form, Icon, Input} from 'antd';
import {connect} from 'react-redux';
import {postnews, news} from '../actions';
import {bindActionCreators} from 'redux';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor, EditorInput } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        editorState: EditorState.createEmpty(),
      };

      this.onEditorStateChange = this.onEditorStateChange.bind(this);
      this.uploadImageCallBack = this.uploadImageCallBack.bind(this);

    }

    onEditorStateChange (editorState) {
      this.setState({
        editorState,
      });

      let text = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));

      this.props.form.setFieldsValue({
        body: text,
      });
    };

    uploadImageCallBack(file) {
      return new Promise(
        (resolve, reject) => {
          const xhr = new XMLHttpRequest();
          //xhr.open('POST', 'http://saddev.s-vfu.ru/news/image');
          xhr.open('POST', 'https://api.imgur.com/3/image');
          xhr.setRequestHeader('Authorization', 'Client-ID 3b20c83fd4460bc');
          const data = new FormData();
          //data.append('file', file);
          data.append('image', file);
          xhr.send(data);
          /*xhr.addEventListener('load', () => {
            console.log('load');
            const response = JSON.parse(xhr.responseText);
            const linkimg = 'http://saddev.s-vfu.ru'+ response.url;
            console.log(response);
            console.log(linkimg);
            resolve({data: {link: linkimg}})
          });*/
          xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            resolve(response);
          });          
          xhr.addEventListener('error', () => {
            console.log('error');
            const error = JSON.parse(xhr.responseText);
            reject(error);
          });
        }
      );
    }


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { editorState } = this.state;
      console.log( this.state);
      return (
          <Form layout="vertical">
            <FormItem label="Заголовок">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Поле обязательное, необходим заголовок новости' }],
              })(
                <Input type="textarea"/>
              )}
            </FormItem>
            <FormItem label="Текст новости">
              {getFieldDecorator('body', {
                rules: [{ required: true,
                          message: 'Поле обязательное, необходим текст новости' 
                        },
                        ],
              })(
              <div>
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={this.onEditorStateChange}
                  toolbar={{
                    image: { uploadCallback: this.uploadImageCallBack, alt: {present: true, mandatory: true } },
                  }}  
                />
                <Input hidden/>  
              </div>
              )}
            </FormItem>                       
          </Form>
      );
    }
  }
);

class NewsAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ModalText: 'Content of the modal',
          visible: true,
          confirmLoading: false,
          loading: false,
          editorState: EditorState.createEmpty(), 
        };

      this.showModal = this.showModal.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
      this.saveFormRef = this.saveFormRef.bind(this);
  }

  /*onEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  };*/

  showModal() {
    console.log(this.state);
    //this.setState({visible: true,});
  }

  handleCancel () {
    console.log(this.state);
    //this.setState({ visible: false });
    this.props.isAddNews(false)
  }

  handleCreate () {
    const form = this.formRef.props.form;
    console.log('form');
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(this.state);
      this.props.postnews(values);
      this.props.news();
      form.resetFields();
      //this.setState({ visible: false});
      this.props.onCloseAddNews();
    });
  }

  saveFormRef (formRef) {
    this.formRef = formRef;
  }

  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <Button type="primary" onClick={this.handleCreate}>Сохранить</Button>
        &nbsp;
        <Button type="primary" onClick={this.props.onCloseAddNews}>Отменить</Button>
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
  const {data, loading} = state.postnews.newsPost;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({postnews: postnews, news: news}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsAdd);

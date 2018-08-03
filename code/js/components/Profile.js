import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Titles from "./Titles";
import { Form, Input, message, Upload, Button, Icon, Row, Col} from 'antd';

const FormItem = Form.Item;

const uploadProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            userFIO: 'Александр Саввинов',
            userPhone: '+7 (4112) 49-69-69',
            userEmail: 'savvinovan@s-vfu.ru',
            userOrg: 'детский сад СВФУ'
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };


    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    };

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    

    render() {
        return (
            <div>

            <Row style={{ paddingTop: 20, paddingBottom: 20}}>
                <Col 
                    offset={1} 
                    span={11}
                >
                    <Titles/>  
                </Col>
                <Col span={11} style={{textAlign: 'right'}}>
                    { !this.state.editMode ? (
                        <Button type="primary" onClick={this.toggleEditMode}><Icon type="edit" /> Редактировать</Button>
                    ) : ( 
                        <Button type="success" onClick={this.toggleEditMode}><Icon type="check" /> Сохранить</Button>
                    )}
                </Col>
            </Row> 
            <Row>
                <Col offset={1} span={4}>
                    <Upload {...uploadProps}>
                        <img src="https://www.s-vfu.ru/upload/main/c36/c36808657c7a8ec68171ad27e63d9d5c.jpg" style={{ borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}/>
                        <Button>
                            <Icon type="upload" /> Загрузить фото
                        </Button>
                    </Upload>
                </Col>
                <Col offset={1} span={13}>
                    { !this.state.editMode ? (
                        <div>
                            <p style={{fontSize: '20px'}}>{this.state.userFIO}</p>
                            <p><Icon type="phone" /> {this.state.userPhone}</p>
                            <p><Icon type="mail" /> {this.state.userEmail}</p>
                            <p><Icon type="home" /> {this.state.userOrg}</p>
                        </div>
                    ) : (
                        <div>                   
                            <Form onSubmit={this.handleSubmit} className="login-form">     
                                <FormItem>    
                                    <Input prefix={<Icon type="user"/>} placeholder="введите ФИО" value={this.state.userFIO} name="userFIO" onChange={this.handleInputChange} />
                                </FormItem>
                                <FormItem>    
                                    <Input prefix={<Icon type="phone"/>} placeholder="введите номер телефона" value={this.state.userPhone} name="userPhone" onChange={this.handleInputChange} />
                                </FormItem>
                                <FormItem>    
                                    <Input prefix={<Icon type="mail"/>} placeholder="введите email" value={this.state.userEmail} name="userEmail" onChange={this.handleInputChange} />
                                </FormItem>
                                <FormItem>    
                                    <Input prefix={<Icon type="home"/>} placeholder="введите название организации" value={this.state.userOrg} name="userOrg" onChange={this.handleInputChange} />
                                </FormItem>
                            </Form>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
        );
    }
}



function mapStateToProps() {
  return {};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);


import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Form, Input, Col, Row, Button } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class LoginForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Row
                    type="flex" 
                    justify="space-around" 
                    align="middle">
                    <Col 
                        span={ 12 }  
                        type="flex" 
                        justify="space-around" 
                        align="middle">
                        <Form.Item label="Username">
                            { getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Username is required!'}],
                            })(<Input />) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex" 
                    justify="space-around" 
                    align="middle">
                    <Col 
                        span={ 12 }  
                        type="flex" 
                        justify="space-around" 
                        align="middle">
                        <Form.Item label="Password">
                            { getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Password is required!' }],
                            })(<Input.Password placeholder="input password" />) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex" 
                    justify="space-around" 
                    align="middle">
                    <Col 
                        span={ 12 }  
                        type="flex" 
                        justify="space-around" 
                        align="middle">
                        <Button type="primary" onClick={ () => { console.log('--- yo yo ', this); } }>
                            <a href="/user-panel">Login</a>
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const CustomLoginForm = connect((state) => {
    return {
        username: state.app.loginForm.username,
        password: state.app.loginForm.password,
    };
})(Form.create({
    name: 'login-form',
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username,
            }),
            password: Form.createFormField({
                ...props.password,
                value: props.password
            })
        };
    },
    onValuesChange(props, values) {
        console.log("--- ", Object.keys(values)[0]);
        console.log("+++ ", values[Object.keys(values)[0]]);
        props.dispatch(updateFormField(Object.keys(values)[0], values[Object.keys(values)[0]]));
    },
})(LoginForm)
);

export default CustomLoginForm;
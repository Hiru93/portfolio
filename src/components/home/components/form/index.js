import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Input, Select, Form } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class CustomForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <Form.Item label="Name">
                    { getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Name is required!' }],
                    })(<Input />) }
                </Form.Item>
                <Form.Item label="Email">
                    { getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Email is required!' }],
                    })(<Input />) }
                </Form.Item>
                <Form.Item label="Friend">
                    { getFieldDecorator('friend')(
                        <Select style={{ width: 120 }}>
                            <Select.Option value="jack">jack</Select.Option>
                            <Select.Option value="jhon" disabled>jhon</Select.Option>
                            <Select.Option value="lucy">lucy</Select.Option>
                            <Select.Option value="peter" disabled></Select.Option>
                        </Select>
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const MockedForm = connect((state) => {
    return {
        formState: {
            email: state.app.form.email,
            name: state.app.form.name,
            friend: state.app.form.friend
        },
    };
    })(Form.create({
        name: 'mocked-form',
        mapPropsToFiels(props) {
            return {
                name: Form.createFormField({
                    ...props.name,
                    value: props.name,
                }),
                email: Form.createFormField({
                    ...props.email,
                    value: props.username.value,
                }),
                friend: Form.createFormField({
                    ...props.friend,
                    value: props.username.value
                })
            };
        },
        onValuesChange(props, values) {
            props.dispatch(updateFormField(Object.keys(values)[0], values[Object.keys(values)[0]]));
        },
    })(CustomForm)
);

export default MockedForm;
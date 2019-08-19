import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { createForm, createFormField, formShape } from 'rc-form';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class Form extends React.Component {
    static propTypes = {
        form: formShape
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div>email:</div>
                <div>
                    <input {...getFieldProps('email')} />
                </div>
                <div>name:</div>
                <div>
                    <input {...getFieldProps('name')} />
                </div>
            </div>
        );
    }
}


const MockedForm = connect((state) => {
    console.log('state ', state);
return {
    formState: {
        email: state.app.form.email,
        name: state.app.form.name
    },
};
})(createForm({
    mapPropsToFields(props) {
        console.log('mapPropsToFields', props);
        return {
            email: createFormField(props.formState.email),
            name: createFormField(props.formState.name)
        };
    },
    onFieldsChange(props, fields) {
        console.log('onFieldsChange', Object.keys(fields));
        console.log('onFieldsChange props ', props);
        props.dispatch(updateFormField(Object.keys(fields)[0], fields[Object.keys(fields)[0]].value));
    },
})(Form));

export default MockedForm;
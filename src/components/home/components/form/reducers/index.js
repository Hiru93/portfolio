import { combineReducers } from 'redux';

//Actions
import {
    UPDATE_FORM_EMAIL,
    UPDATE_FORM_NAME
} from '../actions/actionTypes';

let initialState = {
    form: {
        email: '',
        name: ''
    }
};

export function email(state = initialState.form.email, action) {
    console.log('--- action ', action);
    console.log('--- state ', state );
    switch(action.type) {
        case UPDATE_FORM_EMAIL:
            return action.value;
        default:
            return state;
    }
};

export function name(state = initialState.form.name, action) {
    switch(action.type) {
        case UPDATE_FORM_NAME:
            return action.value;
        default:
            return state;
    }
};

const form = combineReducers({
    email,
    name
});

export default form;
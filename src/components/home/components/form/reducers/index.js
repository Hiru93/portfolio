import { combineReducers } from 'redux';

//Actions
import {
    UPDATE_FORM_EMAIL,
    UPDATE_FORM_NAME,
    UPDATE_FORM_FRIEND
} from '../actions/actionTypes';

let initialState = {
    form: {
        email: '',
        name: '',
        friend: ''
    }
};

export function email(state = initialState.form.email, action) {
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

export function friend(state = initialState.form.friend, action) {
    switch(action.type) {
        case UPDATE_FORM_FRIEND:
            return action.value;
        default:
            return state;
    }
}

const form = combineReducers({
    email,
    name,
    friend
});

export default form;
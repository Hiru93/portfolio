import { combineReducers } from 'redux';

//Actions
import {
    UPDATE_LOGIN_FORM_USERNAME,
    UPDATE_LOGIN_FORM_PASSWORD
} from '../actions/actionTypes';

let initialState = {
    loginForm: {
        username: '',
        password: ''
    }
};

export function username(state = initialState.loginForm.username, action) {
    switch(action.type) {
        case UPDATE_LOGIN_FORM_USERNAME:
            return action.value;
        default:
            return state;
    }
};

export function password(state = initialState.loginForm.password, action) {
    switch(action.type) {
        case UPDATE_LOGIN_FORM_PASSWORD:
            return action.value;
        default:
            return state;
    }
};

const loginForm = combineReducers({
    username,
    password
});

export default loginForm;
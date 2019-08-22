import { combineReducers } from 'redux';

//Actions
import {
    GET_INITIAL_STATE,
    CHANGE_OPT
} from '../actions/actionTypes';

let initialState = {
    state: ' init ',
    selectedOpt: ''
};

export const initState = (state = initialState.state, action) => {
    switch(action.type) {
        case GET_INITIAL_STATE:
            return action.state;
        default:
            return state;
    }
};

export const selectedOpt = (state = initialState.selectedOpt, action) => {
    switch(action.type) {
        case CHANGE_OPT:
            return action.value;
        default:
            return state;
    }
};

const home = combineReducers({
    initState,
    selectedOpt
});

export default home;
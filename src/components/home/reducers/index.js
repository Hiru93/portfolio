import { combineReducers } from 'redux';

//Actions
import {
    GET_INITIAL_STATE
} from '../actions/actionTypes';

let initialState = {
    state: ' init '
};

export const initState = (state = initialState.state, action) => {
    switch(action.type) {
        case GET_INITIAL_STATE:
            return action.state;
        default:
            return state;
    }
};

const home = combineReducers({
    initState
});

export default home;
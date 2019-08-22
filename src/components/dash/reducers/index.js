import { combineReducers } from 'redux';

//Actions
import {
    DASH_SELECTED_KEY,
    DASH_CHANGE_SIDER_STATUS
} from '../actions/actionTypes';

let initialState = {
    siderStatus: true,
    selectedKey: ''
};

export const siderStatus = (state = initialState.siderStatus, action) => {
    switch(action.type) {
        case DASH_CHANGE_SIDER_STATUS:
            return action.status;
        default:
            return state;
    }
};

export const selectedKey = (state = initialState.selectedKey, action) => {
    switch(action.type) {
        case DASH_SELECTED_KEY:
            return action.key;
        default:
            return state;
    }
};

const userDash = combineReducers({
    siderStatus,
    selectedKey
});

export default userDash;
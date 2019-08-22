import {
    DASH_CHANGE_SIDER_STATUS
} from './actionTypes';

export function setSiderStatus(status) {
    return {
        type: DASH_CHANGE_SIDER_STATUS,
        status
    }
}
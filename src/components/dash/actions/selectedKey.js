import {
    DASH_SELECTED_KEY
} from './actionTypes';

export function setKey(key) {
    return {
        type: DASH_SELECTED_KEY,
        key
    }
}
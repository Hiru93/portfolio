import {
    CHANGE_OPT
} from './actionTypes';

export function changeOption(value) {
    return {
        type: CHANGE_OPT,
        value
    }
}
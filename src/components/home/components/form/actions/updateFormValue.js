import {
    UPDATE_DEFAULT_FORM,
    UPDATE_FORM_EMAIL,
    UPDATE_FORM_NAME,
    UPDATE_FORM_FRIEND
} from './actionTypes';

export function updateFormField(field, value) {
    switch(field) {
        case 'email':
            return {
                type: UPDATE_FORM_EMAIL,
                value
            };
        case 'name':
            return {
                type: UPDATE_FORM_NAME,
                value
            };
        case 'friend':
            return {
                type: UPDATE_FORM_FRIEND,
                value
            }
        default:
            return {
                type: UPDATE_DEFAULT_FORM
            };
    }
}
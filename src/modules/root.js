import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

//Reducers
import home from '../components/home/reducers/index'

//Epics

export const rootEpic = combineEpics(

);

export const rootReducer = combineReducers({
    home
});
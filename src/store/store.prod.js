import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from '../modules/root';

//Components reducers

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {

    const store = createStore(combineReducers({
        app: rootReducer,
        apiUrl: (value = { apiUrl: 'http://localhost:4200' }) => value,
    }),
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
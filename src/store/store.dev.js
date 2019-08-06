import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from '../modules/root';

//Components reducers
import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(combineReducers({
        app: rootReducer,
        apiUrl: (value = { url: 'http://localhost:4200' }) => value,
    }),
        applyMiddleware(epicMiddleware, createLogger()),
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    );

    epicMiddleware.run(rootEpic);

    return store;
}
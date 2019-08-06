import React from 'react';
import { render } from 'react-dom';

//Styles
import './index.css';

//Core imports from libraries

//Root component
import App from './containers/App';

//State component
import store from './store/index';

//Translations
import messages_en from './assets/lang/en';
import messages_it from './assets/lang/it';

//Provider mechanic
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'react'

const messages = {
    'en': messages_en,
    'it': messages_it
};

//Setup browser locale language
const language = navigator.language.split(/[-_]/)[0];


render (
    <Provider store={ store() }>
        <IntlProvider locale={ navigator.language } messages={ messages[language] }>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
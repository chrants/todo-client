import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import Store from './store/store';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();

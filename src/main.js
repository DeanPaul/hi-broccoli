import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes/routes';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        {routes({})}
    </Provider>,
    document.getElementById('app')
);

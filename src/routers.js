import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from 'pages/home/';
import { BrowserRouter } from 'react-keeper';
import { Provider } from 'redux'
import store from './store'

const rootRoute =
    <BrowserRouter>
        <PageHome.route />
    </BrowserRouter>;

ReactDOM.render(
    <Provider store={store}>
        rootRoute
    </Provider>,
    document.getElementById('App'));

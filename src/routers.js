import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from 'pages/home/';
import { BrowserRouter } from 'react-keeper';
import { Provider } from 'react-redux'
import store from './store'

const rootRoute =
    <BrowserRouter>
        <Provider store={store}>
            <PageHome.route />
        </Provider>
    </BrowserRouter>;

ReactDOM.render(
    rootRoute,
    document.getElementById('App'));

import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from 'pages/home/';
import { BrowserRouter } from 'react-keeper';

const rootRoute =
    <BrowserRouter>
        <PageHome.route />
    </BrowserRouter>;

ReactDOM.render(rootRoute, document.getElementById('App'));

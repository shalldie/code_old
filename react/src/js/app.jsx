import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import NameList from './components/NameList';

import App from './views/App';

import HomeRoute from './views/Home/Route';
import HomeIndex from './views/Home/Index';
import HomeAbout from './views/Home/About';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home" />
            <Route path="home" component={HomeRoute}>
                <IndexRoute component={HomeIndex} />
                <Route path="about" component={HomeAbout} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
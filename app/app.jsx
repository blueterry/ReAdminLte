
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

//Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css') -- done in webpackconfig.js sassLoader
//$(document).foundation();

//Load admin-lte
require('adminLteStyles');
require('adminLteSkins');
require('font-awesome-webpack');

//App css
//require('style!css!sass!appStyles'); == replaced by sassLoader in webpack.config.js
require("appStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>,
    document.getElementById('app')
);

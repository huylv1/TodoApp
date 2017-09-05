import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router} from 'react-router-dom';
import {createHashHistory} from 'history';

import Layout from'Layout';

//Foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <Router history={createHashHistory()}>
        <Route path="/" component={Layout} />
    </Router>
, document.getElementById('container'))
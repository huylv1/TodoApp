import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TodoApp from 'TodoApp';

const Layout = () => (
    <div>        
        <div className="grid-x grid-padding-x small-up-2 medium-up-2 large-up-2 large-offset-4">
            <div className="cell text-center">                                                                    
                    <Switch>
                        <Route exact path="/" component={TodoApp}/>                        
                    </Switch>                
            </div>            
        </div>        
    </div>
);

module.exports = Layout;
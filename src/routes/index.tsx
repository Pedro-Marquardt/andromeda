import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../view/Home';
import Celulares from '../view/Celulares';
import Notebooks from '../view/Notebooks';
import User from '../view/User';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/celulares" component={Celulares} />
            <Route exact path="/notebooks" component={Notebooks} />
            <Route exact path="/user" component={User} />
        </Switch>
    );
};

export default Routes;

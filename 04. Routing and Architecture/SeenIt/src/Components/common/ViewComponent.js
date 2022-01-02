import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../appElements/Catalog';
import MyPosts from '../appElements/MyPosts';
import Submit from '../appElements/Submit';
import Details from '../appElements/Details';

const ViewComponent = function() {
    return (
        <Switch>
            <Route exact path='/' component={ Catalog }/>
            <Route path='/catalog' component={ Catalog }/>
            <Route path='/submit' component={ Submit }/>
            <Route path='/myPosts' component={ MyPosts }/>
            <Route path='/details/:id' component={ Details }/>
        </Switch>
    );
};

export default ViewComponent;
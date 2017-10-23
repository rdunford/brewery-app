import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import Beer from './components/Beer/Beer';
import Events from './components/Events/Events';
import About from './components/About/About';
import StoreFront from './components/StoreFront/StoreFront';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Dashboard from './components/Dashboard/Dashboard';

export default (

    <div>
        
        <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Beer} path="/beer" />
            <Route component={Events} path='/events' />
            <Route component={About} path='/about' />
            <Route component={ShoppingCart} path='/shoppingcart' />
            <Route component={StoreFront} path='/storefront' />
            <Route component={Dashboard} path='/dashboard' />
        </Switch>

    </div>

)
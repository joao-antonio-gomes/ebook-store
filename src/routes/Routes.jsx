import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Cart from '../pages/Cart'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact
                   path={'/'}>
                <Home />
            </Route>
            <Route exact
                   path={'/details'}>
                <Details />
            </Route>
            <Route exact
                   path={'/cart'}>
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes

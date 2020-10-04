import React from 'react'
import {Route, Switch} from "react-router";
import Phones from "../phones";

const routes = (
    <Switch>
        {/*exact for correct define paths for new routes, than starts with '/'*/}
        <Route path='/' component={Phones} exact/>
    </Switch>
)

const Layout = () => (
    <div>{routes}</div>
)

export default Layout
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
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    Sidebar
                </div>
                <div className='col-md-9'>
                    {routes}
                </div>
            </div>
        </div>
    </div>
)

export default Layout
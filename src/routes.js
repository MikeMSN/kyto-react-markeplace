import React from 'react'
import {Route, Switch} from "react-router";
import Phones from "./containers/phones";
import Phone from "./containers/phone";


export default (
    <Switch>
        {/*exact for correct define paths for new routes, than starts with '/'*/}
        <Route path='/' component={Phones} exact/>
        <Route path='/phones/:id' component={Phone}/>
        <Route path='/categories/:id' component={Phones}/>
    </Switch>
)
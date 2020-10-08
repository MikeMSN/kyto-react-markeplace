import React from 'react'
import {Route, Switch} from "react-router";
import Phones from "./containers/phones";
import Phone from "./containers/phone";
import Basket from "./containers/basket";


export default (
    <Switch>
        {/*exact for correct define paths for new routes, than starts with '/'*/}
        <Route path='/' component={Phones} exact/>
        <Route path='/phones/:id' component={Phone}/>
        <Route path='/categories/:id' component={Phones}/>
        <Route path='/basket' component={Basket}/>
    </Switch>
)
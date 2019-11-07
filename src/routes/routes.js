import React from "react";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import asyncComponent from "../components/AsyncComponent";

import Home from "../containers/home/Home";
import NotFound from "../containers/NotFound";
// const AsyncLogin = asyncComponent(() => import("../containers/Login"));

export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            {/*<Route path="/login" exact component={AsyncLogin} props={childProps}/>*/}
            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

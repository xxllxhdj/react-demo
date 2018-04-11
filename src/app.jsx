import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import asyncComponent from './utils/asyncComponent';

import Home from './page/home';

const Test = asyncComponent(() => import('./page/test'));
const Todox = asyncComponent(() => import('./page/todox'));

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/todox" component={Todox} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import asyncComponent from './utils/asyncComponent';

import Home from './page/home';

const Test = asyncComponent(() => import('./page/test'));

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;

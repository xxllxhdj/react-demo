import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './page/home';
import Test from './page/test';

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

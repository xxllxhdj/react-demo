import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './home';
import Test from './test';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                </Switch>
            </main>
        );
    }
}

export default Main;

import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import asyncComponent from './utils/asyncComponent';

import Home from './page/home';

const Test = asyncComponent(() => import('./page/test'));

const store = createStore(rootReducer);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </Fragment>
            </Provider>
        );
    }
}

export default App;

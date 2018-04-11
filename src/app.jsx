import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import asyncComponent from './utils/asyncComponent';

import Home from './page/home';

const Test = asyncComponent(() => import('./page/test'));
const Todox = asyncComponent(() => import('./page/todox'));

const store = createStore(rootReducer, applyMiddleware(thunk));

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/todox" component={Todox} />
                </Switch>
            </Provider>
        );
    }
}

export default App;

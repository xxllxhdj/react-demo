import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App);
    })
}

registerServiceWorker();
import React, { Component, Fragment } from "react";

import Header from './page/header';
import Main from './page/main';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;

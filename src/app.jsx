import React, { Component } from "react";

import Header from './page/header';
import Main from './page/main';

export class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;

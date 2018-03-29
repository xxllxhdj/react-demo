import React, { Component } from 'react';

import Welcome from './components/welcome';
import Clock from './components/clock';
import Count from './components/count';
import List from './components/list';

export class App extends Component {
    render() {
        return (
            <div>
                <Welcome name="world" />
                <Clock/>
                <Count/>
                <List/>
            </div>
        );
    }
};

export default App;

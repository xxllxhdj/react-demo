import React, { Component } from 'react';

import Welcome from './components/welcome';
import Clock from './components/clock';
import Count from './components/count';
import List from './components/list';
import NameForm from './components/nameForm';
import Calculator from './components/calculator';
import Dialog from './components/dialog';

export class App extends Component {
    render() {
        return (
            <div>
                <Welcome name="world" />
                <Clock />
                <Count />
                <List />
                <NameForm />
                <Calculator />
                <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                    <h1>do something</h1>
                </Dialog>
            </div>
        );
    }
};

export default App;

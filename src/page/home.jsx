import React, { Component } from "react";

import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import './home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <img src={logo} className="home-logo" alt="logo" />
                    <h1 className="home-title">Welcome to React</h1>
                </header>
                <p className="home-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h3>Framework</h3>
                <div>
                    <Link to="/test">Test</Link>
                </div>
                <h3>Essential Links</h3>
                <ul>
                    <li><a href="http://www.css88.com/react/" target="_blank">Core Docs</a></li>
                </ul>
                <h3>Ecosystem</h3>
                <ul>
                    <li><a href="http://reacttraining.cn/" target="_blank">react-router</a></li>
                    <li><a href="https://github.com/facebook/react-devtools" target="_blank">react-devtools</a></li>
                    <li><a href="https://github.com/enaqx/awesome-react" target="_blank">awesome-react</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num: 0
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState((state, props) => { return { 
    //         num: state.num + 1
    //     }});  
    // }

    handleClick = () => {
        this.setState((state, props) => ({ 
            num: state.num + 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击{this.state.num}次</button>
            </div>
        )
    }
};

export default Count;

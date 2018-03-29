import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [1, 2, 3, 4, 5, 6]
        };
    };

    render() {
        return (
            <ul>
                {this.state.list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        );
    }
};

export default List;

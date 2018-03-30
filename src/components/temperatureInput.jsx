import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.temperature} onChange={this.handleChange}/>
                <label>{scaleNames[this.props.scale]}</label>
            </div>
        )
    }
};

export default TemperatureInput;

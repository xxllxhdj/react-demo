import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            flavor: ''
        };
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value.toUpperCase()
        });
    }

    handleFlavorChange = (event) => {
        this.setState({
            flavor: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert(
            `Selected file - ${
            this.fileInput.files[0].name
            }`
        );
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        姓名：
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>{this.state.name}</label>
                </div>
                <div>
                    <label>
                        爱好：
                        <select value={this.state.flavor} onChange={this.handleFlavorChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label>{this.state.flavor}</label>
                </div>
                <div>
                    <label>
                        附件：
                        <input type="file" ref={input => {
                            this.fileInput = input;
                        }}/>
                    </label>
                </div>
            </form>
        )
    }
};

export default NameForm;

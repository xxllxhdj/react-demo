import React, { Component } from 'react';
import PropTypes from 'prop-types';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

class Dialog extends Component {
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string,
        children: PropTypes.element
    };
    static defaultProps = {
        title: 'Dialog'
    };
    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <p className="Dialog-message">
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        );
    }
};

// Dialog.propTypes = {
//     title: PropTypes.string,
//     message: PropTypes.string,
//     children: PropTypes.element
// };

export default Dialog;

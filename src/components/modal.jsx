import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
    };

    componentDidMount() {
        this.modalRoot = document.createElement('div');
        this.modalRoot.className = 'modal-root';
        this.modalRoot.appendChild(this.el);
        document.body.appendChild(this.modalRoot);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
        document.body.removeChild(this.modalRoot);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
};

export default Modal;

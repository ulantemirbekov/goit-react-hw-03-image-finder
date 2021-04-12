import { Component } from "react";
import { createPortal } from 'react-dom';
// import PropTypes from "prop-types";
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.closeModal()
        };
    };

    handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.closeModal()
        };
    };

    render() {

        return createPortal(

            <div className={styles.Overlay} onClick={this.handleBackdropClick}>
                <div className={styles.Modal}>
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal">
                    <p>This is my portal {this.props.text}</p>
                    <button onClick={this.props.close}>Close</button>
                </div>
            </div>,
            this.props.root
        );
    }
}

export class Portals extends React.Component {
    state ={
        isShown: false
    };

    handleClick = () => {
        if (!this.state.isShown) {
            this.root = document.createElement('div');
            const body = document.body;

            body.append(this.root);
        } else {
            this.root.remove();
        }

        this.setState({ isShown: !this.state.isShown });
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Show modal</button>
                {this.state.isShown && (<Modal text={'Hello world'}  close={this.handleClick} root={this.root}/>)}
            </>
        )
    }
}
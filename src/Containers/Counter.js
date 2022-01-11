import React from 'react';

import { Button } from "../components/Button";

export class Counter extends React.Component {
    state = { counter: 0 };

    handleClickPlus = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    handleClickMinus = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div>
                <Button text="Plus" handleClick={this.handleClickPlus}/>
                <p>{this.state.counter}</p>
                <Button text="Minus" handleClick={this.handleClickMinus}/>
            </div>
        );
    }
}


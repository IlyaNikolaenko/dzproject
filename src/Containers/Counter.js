import React from 'react';
import { Button } from "../components/Button";
import {actionInc,actionDec} from "../actions/counter";
import {connect} from "react-redux";

class Counter extends React.Component {
    render() {
        const {
            counter,
            actionInc,
            actionDec
        } = this.props;
        return (
            <div>
                <Button text="Plus" handleClick={actionInc}/>
                <p>{counter}</p>
                <Button text="Minus" handleClick={actionDec}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ counter: state.counterReducer.counter});
const mapDispatchToProps = {
    actionInc: actionInc,
    actionDec
};

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

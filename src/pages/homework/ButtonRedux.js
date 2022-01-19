import React from "react";
import {actionGreen, actionRed, actionBlue} from "../../actions/buttonRedux";
import {connect} from "react-redux";

class ButtonRedux extends React.Component {
    render() {
        const {
            bg,
            actionGreen,
            actionRed,
            actionBlue
        } = this.props;
        return(
            <div>
                <button onClick={actionGreen} style={{background: bg ||"green"}}>Green</button>
                <button onClick={actionRed} style={{background: bg || "red"}}>Red</button>
                <button onClick={actionBlue} style={{background: bg || "blue"}}>Blue</button>
            </div>
        )
    }
}
const mapStateToProps = ({buttonReduxReducer: {bg}}) =>({bg: bg});
const mapDispatchToProps = {
    actionGreen,
    actionRed,
    actionBlue
}

export const ButtonReduxContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonRedux);
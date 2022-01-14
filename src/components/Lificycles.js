import React from "react";

export class Lificycles extends React.Component {
    //state = {count: 0}

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        console.log(prevState.count);
    };

    handleClick = () => {
        this.setState({count: ++this.state.count})
    }

    setInputRef = (node) => {
        this.inputRef = node;
    }

    render() {
        const { count } = this.state;

        console.log(this.inputRef);

        return (
            <div>
                <h3>Lifecycles {count}</h3>
                <button onClick={this.handleClick}>Click</button>
                <input type ="text" ref={this.setInputRef}/>
            </div>
        );
    }
}
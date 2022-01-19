import React from "react";

export class Timer extends React.Component {
    state = {time: this.createTimer()}

    createTimer(){
        let time = new Date();
        let hour = time.getHours(),
            min = time.getMinutes(),
            sec = time.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        return `Время: ${hour}:${min}:${sec}`;
    }
    componentDidMount() {
        this.timerId = setInterval( this.tick, 1000)
    }
    tick = () => {
        this.setState({time: this.createTimer()})
    }
    handleClickStart = () => {
        if (!this.timerId) this.timerId = setInterval( this.tick, 1000);
    }
    handleClickStop = () => {
        clearInterval(this.timerId);
        this.timerId = 0;
    }
    render() {
        return (
            <div>
                <h2>{this.state.time}</h2>
                <button onClick={this.handleClickStart}>Start</button>
                <button onClick={this.handleClickStop}>Stop</button>
            </div>
        )
    }
}
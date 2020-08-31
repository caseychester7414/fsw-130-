import React, { Component } from 'react'
import { connect } from 'react-redux/src'






const mapStateToProps = (state) => {
    return {
        minutes: state.minutes,
        seconds: state.seconds,
        milliseconds: state.milliseconds
    }
}




class Counter extends Component {
    state = {
        arr: [],
        x: 1
    }

    startTimer = () => {
        
        this.t = setInterval(() => { this.props.dispatch({ type: 'START_TIMER' }) }, 10)


    }

   
    stopTimer = () => {
        clearInterval(this.t)
    }



    resetTimer = () => {
        this.props.dispatch({ type: 'RESET_TIMER' })
    }

    lapTimer = () => {
        this.state.arr.push(
            <div style={{  }}>
                {this.setState(prevState => { return { x: prevState.x + 1 } })}
            Lap {this.state.x}: {this.props.minutes}:{this.props.seconds}:{this.props.milliseconds}
                
            </div>)
    }


    render() {
        return (
            <div>
                <header>
                    <div className="timer">
                        <h1 className="headColor">Redux React Timer</h1>
                        
                        <h1>{this.props.minutes}:{this.props.seconds}:{this.props.milliseconds}</h1>
                        
                        
                        <div>
                            <button onClick={this.startTimer}>Start</button>
                            <button onClick={this.stopTimer}>Stop</button>
                            <button onClick={this.resetTimer}>Reset</button>
                            <button onClick={this.lapTimer}>Lap</button>
                        </div>
                        <h2>{this.state.arr.map((appMap, index) => <div key={index}>{appMap}</div>)}</h2>
                    </div>
                </header>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter)
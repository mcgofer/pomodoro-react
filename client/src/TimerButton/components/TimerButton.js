import React, { Component } from 'react';
import * as timerStates from '../../timerStates';

class TimerButton extends Component {
    constructor(props) {
        super(props);
        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if (this.props.timerState === timerStates.NOT_SET)
            return (<button className='btn mx-auto start' onClick={this.props.startTimer}>
                    Start
                    </button>)

        if (this.props.timerState === timerStates.RUNNING)
            return (<button className='btn  mx-auto reset' onClick={this.props.stopTimer}>
                    Reset
                    </button>)
        // if (this.props.timerState === timerStates.COMPLETE)
        // return (<button className='btn  mx-auto reset' onClick={this.props.stopTimer}>
        //         Reset
        //         </button>)

    }

    render() {
        return (
            <div className='row'>
                {this.getButton()}
            </div>
        );
    }
}
export default TimerButton;
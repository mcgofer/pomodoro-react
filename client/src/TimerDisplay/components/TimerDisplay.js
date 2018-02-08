import React from 'react';
import * as timerStates from '../../timerStates';

const leftPad = (val) => {
    if (val < 10) return `0${val}`

    return `${val}`;
}

const TimerDisplay = (props) => (
    <div>
        <div className="row mx-auto">
            {
                (props.timerState === timerStates.COMPLETE)
               
            }
        </div>
        <div className='row timer-circle mx-auto'>
            <h2>
                {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
            </h2>
        </div>
    </div>
);

export default TimerDisplay;
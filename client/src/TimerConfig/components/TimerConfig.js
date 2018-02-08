import React, { Component } from 'react';

class TimerConfig extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newBaseTime = this.props.baseTime;

     
        if (event.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');
        if (event.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(event.target.value, 10), 'seconds');

        this.props.setBaseTime(newBaseTime);

    }

    render() {
        return (
            <div className="form-section mx-auto">
                <div className='row'>
                    <h2 className="set-timer mx-auto">Set Timer</h2>
                </div>

    
                <div className='row'>
                    <div className="form-group mx-auto">
                        <div>
                            <label htmlFor='minutes'>Minutes</label>
                        </div>
                        <div>
                            <input
                                id='minutes'
                                className='form-control'
                                type='number'
                                defaultValue={this.props.baseTime.get('minutes')}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-group mx-auto">
                        <div>
                            <label htmlFor='seconds'>Seconds</label>
                        </div>
                        <div>
                            <input
                                id='seconds'
                                className='form-control'
                                type='number'
                                defaultValue={this.props.baseTime.get('seconds')}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TimerConfig;
import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-content card card-block mx-auto">
        <div className='card-body'>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-content  mx-auto">
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;

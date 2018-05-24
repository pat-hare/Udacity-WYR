import React, { Component } from 'react';
import { handleInitialData } from './actions/index'

class App extends Component {
  render() {
    console.log('InitialData:  ', handleInitialData())
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;

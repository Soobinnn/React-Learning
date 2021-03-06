import React, { Component } from 'react';

import './App.css';
import CounterContainer from './containers/CounterContainer';
import PaletteContainer from './containers/PaletteContainer';
import WaitingListContainer from './containers/WaitingListContainer';
import ImmuPaletteContainer from './containers/ImmuPaletteContainer';
import ImmuCounterContainer from './containers/ImmuCounterContainer';
import ImmuWaitingListContainer from './containers/ImmuWaitingListContainer';
import ImmerPaletteContainer from './containers/ImmerPaletteContainer';
import ImmerCounterContainer from './containers/ImmerCounterContainer';
import ImmerWaitingListCountainer from './containers/ImmerWaitingListCountainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer />

        <ImmuPaletteContainer />
        <ImmuCounterContainer />
        <ImmuWaitingListContainer />

        <ImmerPaletteContainer/>
        <ImmerCounterContainer/>
        <ImmerWaitingListCountainer/>
      </div>
    );
  }
}

export default App;

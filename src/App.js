import React, {Component} from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import Roulette from './state-drills/Roulette';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <h1>Hello World</h1>
        <HelloWorld who={'World'} />

        <h1>Bomb</h1>
        <Bomb />

        <h1>Roulette</h1>
        <Roulette bulletInChamber={8} />
      </main>
    );
  }
}

export default App;
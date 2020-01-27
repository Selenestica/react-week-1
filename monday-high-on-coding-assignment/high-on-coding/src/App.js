import React, {Component} from 'react';
import './App.css';
import './Counter.css'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <>
        <h1>Please take a moment to rate our service</h1>
        <Counter />
      </>
    )
  }
}

export default App;

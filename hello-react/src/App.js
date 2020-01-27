import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Welcome from './Welcome'
import Counter from './Counter'

class App extends Component {
  //virtual dom is a hierarchy of components that people see on a screen
  //render is a required function of a component
  //JSX
  render() {
    return (
    <div>
      <Header />
      <Welcome fname = "JB" lname = "Wilson" />
      <p>I am React.js!</p>
      <Counter />
    </div>
    )
  }
}

export default App;

//virtual dom is a dom managed by react 
//state:
  //

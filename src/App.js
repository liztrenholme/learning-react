import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const hola = "This is inside a variable, which can be called to be put on the page at any time.";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Practicing with React.js!</h1>
        </header>
        <p className="App-intro">
          Woohoo!  This is reactive!
          <h1> {hola} </h1>
        </p>
      </div>
    );
  }
}

export default App;

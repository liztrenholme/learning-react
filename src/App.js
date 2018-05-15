import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [{
                name: "Houdini",
                type: "hedgehog",
                age: 5,
                pattern: "pinto",
                id: 1
            },
            {
                name: "Dudley",
                type: "cat",
                age: 11,
                pattern: "tuxedo",
                is: 2
            }
        ];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: list,
        };
    }
    render() {
        const hola = "This is inside of a variable, which can be called to be put on the page at any time.";
        
        return ( 
            <div className="App">
            <header className="App-header" >
            <img src= { logo } className="App-logo"alt="logo"/>
            <h1 className="App-title"> Practicing with React.js!</h1> 
            </header> 
            <p className = "App-intro">
            Woohoo! This is reactive!
            {this.state.list.map(item =>
              <div key={item.id}>
              <span> {item.name} </span> <br/>
              <span> {item.type} </span> <br/>
              <span> {item.age} </span> <br/>
              <span> {item.pattern} </span> <br/>
              </div>
              )}
            <h4> { hola } </h4> </p> 
            </div>

        );
    }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const banonna = 'https://avatars2.githubusercontent.com/u/32151271?s=460&v=4'; // Tell Webpack this JS file uses this image



const list = [{ // 
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
    constructor(props) { //defining initial state
        super(props); // <-must always call super! props brings in props in case you want to use it later.
        this.state = { // binds the state to the class
          list: list,
          picture: banonna,
        };
    }
    render() {
        const hola = "This is inside of a variable, which can be called to be put on the page at any time.";
        return ( 
            <div className="App">
            <h1> { hola } </h1>
            <header className="App-header" >
            <img src= { logo } className="App-logo"alt="logo"/>
            <h1 className="App-title"> Practicing with React.js!</h1> 
            </header> 
            <img src={banonna} alt="bananaphone" />
            <p className = "App-intro">
            Woohoo! This is reactive!
            {this.state.list.map(item => // here we are using and accessing the state
              <div key={item.id}>
              <span> {item.name} </span> <br/>
              <span> {item.type} </span> <br/>
              <span> {item.age} </span> <br/>
              <span> {item.pattern} </span> <br/>
              </div>
              )}
              <br /> <br /> /* this is dynamic data, but it MUST be kept to one line within the 
              curly braces. also, notice how this comment shows up on the page... this is happening because 
              it is within the return() of render() function, because it's literally rendering everything inside of it!*/

              Look at how cool this is:
              { 2+2 } 
            <h4> { hola } </h4> </p> 
            </div>
            
        

        );

    }
        
}

export default App;
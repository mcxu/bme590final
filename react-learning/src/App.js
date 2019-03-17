import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

/*
Video from: https://youtu.be/T3K4Wjz_jAQ
*/

class App extends Component {
  render() {
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); */

    return (
      <h2>
      <div>
          Hello World!
          <Counter name="Mark" />
          <Counter name="Owen" />
      </div>
      </h2>
    );
  } 

}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

export function Demo(props) {
  return (
      <div>{JSON.stringify(props)}</div>
  )
}

const App = function(props) {
  return(
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
        <button onClick={props.handleOnPlusClick}>PLUS</button>
        <Demo counter={props.counter} />
      </div>
  )
};

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import LoginForm from './form/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Counter</h3>
        <Counter />
        <hr />
        <h3>Login Form</h3>
        <LoginForm />
      </div>
    );
  }
}

export default App;

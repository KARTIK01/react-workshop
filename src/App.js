import React, {Component} from 'react';
import './App.css';
import Counter from './counter/Counter';
import LoginForm from './form/LoginForm';
import Profile from './profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Counter</h3>
        <Counter />
        <hr />
        <Profile />
        <hr />
        <h3>Login Form</h3>
        <LoginForm />
      </div>
    );
  }
}

export default App;

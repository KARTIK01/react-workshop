import React, {Component} from 'react';

class LoginForm extends Component {

  state = {};

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('FORM VALUES', this.state);
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  };

  render() {
    return (
        <form onSubmit={this.handleOnSubmit}>
          <h5>User Name</h5>
          <input type='text' name='userName' onChange={this.handleOnChange}/>
          <h5>Password</h5>
          <input type='password' name='password' onChange={this.handleOnChange} /> <br />
          <button type='submit'>Login</button>
        </form>
    );
  }
}

export default LoginForm;

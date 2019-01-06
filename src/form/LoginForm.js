import React, {Component} from 'react';

class LoginForm extends Component {

  state = {
    status: ''
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    if(this.state.userName ===  this.state.password) {
      this.setState({ status: "Success"});
    } else {
      this.setState({ status: "Fail"});
    }
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
          {this.state.status}
        </form>
    );
  }
}

export default LoginForm;

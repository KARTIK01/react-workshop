import React, {Component} from 'react';
import './App.css';
import Counter from './counter/Counter';
import LoginForm from './form/LoginForm';
import Profile from './profile/Profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  let apiCall;
  componentDidMount(){
    apiCall = apiCall()
        .then((res) => {
          this.setState({ users: res.data.users });
        })
  }

  onClick() {

  }

  componentDidUpdate(prevProps, prevState) {
    this.state.counter;
    prevState.counter;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps;
  }

  handleDeleteUser() {
    const users = this.state.users;
    const newUsers = users.splice(index, 1);
    this.setState({ users: newUsers });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.counter === nextState.counter;
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <h3 onClick={this.onClick}>Counter</h3>
        {this.state.users}
        <Counter />
        <hr />
        <Profile />
        <hr />
        <h3>Login Form</h3>
        <LoginForm />
      </div>
    );
  }

  componentWillUnmount() {
    apiCall.cancel();
  }

}

export default App;

import React from 'react';
import App, {Demo} from './App';
import App2 from './App2';


export default class Counter extends React.Component {

  state = {
    counter: 0,
  };

  handleOnPlusClick = () => {
    this.setState({counter : this.state.counter + 1});
  };


  handleOnMinusClick = () => {
    this.setState({counter : this.state.counter - 1});
  };

  render() {

    return (
        <div>
          <button onClick={this.handleOnPlusClick}>Plus (+)</button>
          <div>{this.state.counter}</div>
          <button onClick={this.handleOnMinusClick}>Minus (-)</button>
          <hr />
          <App handleOnPlusClick={this.handleOnPlusClick} counter={this.state.counter} a="ok"/>
          <App2 counter={this.state.counter} />
          <Demo />
        </div>
    )
  }
}

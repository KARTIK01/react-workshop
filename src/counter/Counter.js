import React, {Component} from 'react';

class Counter extends Component {

  state = {
    count: 0,
  };

  onIncClick = () => {
    this.setState({count : this.state.count + 1 });
  };

  onSubClick = () => {
    this.setState({count : this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
        <div >
          <button onClick={this.onSubClick}>Minus (-) </button>
          <h4>{count}</h4>
          <button onClick={this.onIncClick}>Plus (+) </button>
        </div>
    );
  }
}

export default Counter;

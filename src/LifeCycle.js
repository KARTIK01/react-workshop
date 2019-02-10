import React, {Component} from 'react';

class LifeCycle extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      name: "React Js"
    };
    console.log('1. constructor');
  }

  handleOnClick = () => this.setState({counter: this.state.counter + 1});


  render() {
    console.log('2. render');
    return (
        <div style={{padding: 20}}>
          <div>
            LifeCycle DEMO
          </div>
          <p>{this.state.counter}</p>
          <button onClick={this.handleOnClick}>+1</button>
        </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.counter !== this.state.counter)
      return true;
    if(nextState.name !== this.state.name)
      return false;
  }

  componentDidMount() {
    console.log('3. componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('3.5. getSnapshotBeforeUpdate', prevState, this.state);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. componentDidUpdate');
  }

}

export default LifeCycle;

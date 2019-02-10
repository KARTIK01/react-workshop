import React, {Component} from 'react';
const BigComponent = React.lazy(() => import('./BigComponnet'));
// import BigComponent from './BigComponnet';

function Loading() {
  return <div>Loading...</div>
}

class CodeSpliting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
        <div>
          <button onClick={() => this.setState({show: true })}>Hello</button>
          {this.state.show &&
          <React.Suspense fallback={<Loading />} >
            <BigComponent />
          </React.Suspense>
          }
        </div>
    );
  }
}

export default CodeSpliting;

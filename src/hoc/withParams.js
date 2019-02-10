import React from 'react';
import Error from './Error';


export default function withParams(WrapperComponent) {

  class ParamHoc extends React.Component {

    componentDidMount(){
      if(this.props.id) {
        // api call
      }
    }

    render() {
      if(this.props.id)
        return <WrapperComponent {...this.props} />;
      else
       return <Error />;
    }
  }

  return ParamHoc;
}

import React from 'react';

function Avatar(props) {
  const {src} = props;
  return <img src={src} style={{width: 40}}/>;
}

export default Avatar;

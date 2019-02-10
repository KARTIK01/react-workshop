import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import withParams from './withParams';

function Avatar(props) {
  return <img src={props.src} />;
}

function UserPhoto(props) {
  if(props.src) {
    return (<Avatar src={props.src} />)
  } else if(props.name) {
    return <div>{props.name.split(' ').map(name => name[0]).join('')}</div>
  } else if(props.email) {
    return <div>{props.email[0]}</div>
  }
}

function UserProfile(props) {
  return (
      <div>
        <UserPhoto src={props.src} name={props.name} />
        This is User: {props.id}
      </div>
  );
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default withParams(UserProfile);

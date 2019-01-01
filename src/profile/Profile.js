import React from 'react';
import Avatar from './Avatar';
import reactLogo from './react.svg';

function Profile(props) {
  return (
      <div className='center'>
        <span>My Profile</span>
        <Avatar src={reactLogo} />
      </div>
  );
}

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;

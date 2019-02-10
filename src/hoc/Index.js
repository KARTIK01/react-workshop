import React from 'react';
import UserProfile from './UserProfile';
import CompanyProfile from './CompanyProfile';

function Index(props) {
  return (
      <div style={{padding: 20}}>
        <UserProfile name="Kartik Agarwal" id={20} />
        <CompanyProfile id={30} />
      </div>
  );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;

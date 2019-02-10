import React from 'react';
import withParams from './withParams';

function CompanyProfile(props) {
  return (
      <div>
        This is Company: {props.id}
      </div>
  );
}

CompanyProfile.propTypes = {};
CompanyProfile.defaultProps = {};

export default withParams(CompanyProfile);

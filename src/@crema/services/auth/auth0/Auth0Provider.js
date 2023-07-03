import React from 'react';
import PropTypes from 'prop-types';
import {Auth0Provider as Auth0} from '@auth0/auth0-react';

const Auth0Provider = ({children}) => {
  return (
    <Auth0
      domain='dev-o61c50mp0vf74sfu.au.auth0.com'
      clientId='jgJlvIR26pfte6OwXikydkEDJ0suuQTc'
      redirectUri={window.location.origin}>
      {children}
    </Auth0>
  );
};

export default Auth0Provider;
Auth0Provider.propTypes = {
  children: PropTypes.node,
};

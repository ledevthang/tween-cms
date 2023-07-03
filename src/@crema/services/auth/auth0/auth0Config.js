import createAuth0Client from '@auth0/auth0-spa-js';

const Auth0Config = async () => {
  return await createAuth0Client({
    client_id: 'jgJlvIR26pfte6OwXikydkEDJ0suuQTc',
    domain: 'dev-o61c50mp0vf74sfu.au.auth0.com',
    redirect_uri: 'https://tween-cms.vercel.app/application/crm',
    audience: 'dev-o61c50mp0vf74sfu.au.auth0.com/userinfo',
  });
};

export default Auth0Config;

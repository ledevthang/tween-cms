import React from 'react';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import SignInJwtAuth from './SigninJwtAuth';

const Signin = () => {
  return (
    <AuthWrapper
      messAction={{textLink: 'common.signup', text: 'common.dontHaveAccount'}}
      navigateTo='/signup'>
      <AppPageMetadata title='Login' />
      <SignInJwtAuth />
    </AuthWrapper>
  );
};

export default Signin;

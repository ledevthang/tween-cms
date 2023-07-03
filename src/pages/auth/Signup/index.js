import React from 'react';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import SignupFirebase from './SignupFirebase';

const Signup = () => {
  return (
    <AuthWrapper
      messAction={{
        textLink: 'common.alreadyHaveAccount',
        text: 'common.signIn',
      }}
      navigateTo='/signIn'>
      <AppPageMetadata title='Register' />
      <SignupFirebase />
    </AuthWrapper>
  );
};

export default Signup;

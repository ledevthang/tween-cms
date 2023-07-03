import React from 'react';
import PropTypes from 'prop-types';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import './AuthWrapper.style.less';
import {AppInfoView} from '../../@crema';
import AppImage from '@crema/core/AppImage';
import {Link} from 'react-router-dom';
import IntlMessages from '../../@crema/utility/IntlMessages';

import LoginImage from 'assets/image/imageLogin.png';

const AuthWrapper = ({children, messAction, navigateTo}) => {
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{flex: 1}}
      delay={0}
      interval={10}
      duration={200}>
      <div className='auth-wrap' key={'wrap'}>
        <div className='auth-wrap__container'>
          <div className='auth-wrap__image'>
            <AppImage
              width={448}
              src={LoginImage}
              alt='LoginImage'
              preview={false}
            />
          </div>
          <div>
            <h1 className='auth-title body-bolded-title text-center'>
              <IntlMessages id='common.signIn' />
            </h1>
            <div className='auth-wrap__form'>{children}</div>
            <div className='auth-wrap__action'>
              <span className='sign-text-grey body-regular-content'>
                <IntlMessages id={messAction.text} />
              </span>
              <Link
                to={navigateTo}
                className='underlineNone colorTextPrimary body-regular-content'>
                <IntlMessages id={messAction.textLink} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
  messAction: PropTypes.shape({
    text: PropTypes.string,
    textLink: PropTypes.string,
  }),
  navigateTo: PropTypes.string,
};

AuthWrapper.defaultProps = {
  navigateTo: '',
  messAction: {text: '', textLink: ''},
};

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {Button, Checkbox, Form, Input} from 'antd';

import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useAuthMethod} from '../../../@crema/utility/AuthHooks';

const SignInJwtAuth = () => {
  const navigate = useNavigate();
  const {signInUser} = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    navigate('/forget-password', {tab: 'jwtAuth'});
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const {messages} = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          onFinish={signInUser}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            className='form-field'
            rules={[{required: true, message: 'Please input your Email!'}]}>
            <Input
              placeholder={messages['common.email']}
              className='form-field_input'
            />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{required: true, message: 'Please input your Password!'}]}>
            <Input.Password
              placeholder={messages['common.password']}
              className='form-field_input'
            />
          </Form.Item>

          <div className='rememberMe'>
            <Checkbox onChange={onRememberMe}>
              <span className='body-regular-content'>
                <IntlMessages id='common.rememberMe' />
              </span>
            </Checkbox>

            <span className='sign-link' onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </span>
          </div>

          <div className='form-btn-field'>
            <Button htmlType='submit' className='sign-btn'>
              <span className='body-bold-content text-white-color'>
                <IntlMessages id='common.login' />
              </span>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;

import { useAuthDispatch, useAuthState } from '../../../context/auth';
import { useFormik } from 'formik';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import React from 'react';

import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import modalStyles from '../../organisms/modal/modal.module.scss';
import { Input } from '../../../components/atoms/input/input.component';
import { Button } from '../../../components/atoms/button/button.component';
import { LoginTemplateProps } from '../props';

export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };
  return (
    <div className={[space['p--24']].join(' ')}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            type='text'
            direction='bottom'
            name='email'
            placeholder='Email'
            inputType='text'
            handleChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            type='text'
            direction='top'
            name='password'
            inputType='password'
            placeholder='Password'
            handleChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button type='primary' title='Log in' />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button type='underline' title='Forgot password?' />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button type='underline' title='More login options' />
        </div>
        <div className={[layout['flex']].join(' ')}>
          <p className={[font['size--14'], space['m-r--8']].join(' ')}>
            Don't have an account?
          </p>
          <Button type='underline' title='Sign up' onPress={switchAuth} />
        </div>
      </form>
    </div>
  );
};

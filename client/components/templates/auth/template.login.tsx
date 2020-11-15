import React from 'react';
import { useFormik } from 'formik';

/**
 * Contexts
 */
import { useAuthDispatch, useAuthState } from '../../../context/auth';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';

/**
 * Components
 */
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';

/**
 * Props
 */
import { LoginTemplateProps } from '../props';

/**
 * Hooks
 */
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  useLockBodyScroll();
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

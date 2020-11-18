import React, { useState } from 'react';
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
import { Bullet } from '../../atoms/bullet/bullet.component';
import { Animation } from '../../animation/animation.component';

import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Props
 */
import { LoginTemplateProps } from '../props';

/**
 * Helper
 */
import { validateLogin as validate } from '../../../helper/auth';

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
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  let token;

  const onChange = (value) => {
    console.log('Captcha value:', value);
    token = value;
    const body = JSON.stringify({
      ...formik.values,
      'g-recaptcha-response': token,
    });
    console.log('body', body);
    const login = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: 'POST',
          body,
        }
      );
      const data = await response.json();
      console.log('data', data);
    };
    login();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: () => {
      setShow(true);
      setLoading(true);
      // formik.resetForm();
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };

  const switchBack = () => {
    return authDispatch({ type: 'auth_login' });
  };

  const redirectTo = () => {
    return authDispatch({ type: 'forgot_password' });
  };

  return (
    <div className={[space['p--24']].join(' ')}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              type='email'
              direction='bottom'
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              type='password'
              direction='top'
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {show && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
            )}
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.email} />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.password} />
              </div>
            )}
          </div>
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='primary'
            title={
              loading ? (
                <div>
                  <Animation type='loading' />
                </div>
              ) : (
                'Log in'
              )
            }
          />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='underline'
            title='Forgot password?'
            onPress={redirectTo}
          />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='underline'
            title='More login options'
            onPress={switchBack}
          />
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

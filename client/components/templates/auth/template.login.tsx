import React, { useReducer, useState } from 'react';
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
import { Card } from '../../atoms/card/card.component';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'recaptcha_start':
      return { ...state, recaptcha: true, loading: true };
    case 'recaptcha_success':
      return { ...state, recaptcha: false, loading: false, status: 'success' };
    case 'recaptcha_fail':
      return { ...state, recaptcha: false, loading: false, status: 'fail' };
    default:
      return state;
  }
};

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  useLockBodyScroll();
  const authState = useAuthState();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    recaptcha: false,
    status: '',
  });
  const authDispatch = useAuthDispatch();

  let token;

  const onChange = (value) => {
    token = value;
    const body = JSON.stringify({
      ...formik.values,
      'g-recaptcha-response': token,
    });
    const login = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: 'POST',
          body,
        }
      );
      console.log('reponsstat', response.status);
      if (response.status === 200) {
        dispatch({ type: 'recaptcha_success' });
        return;
      }
      dispatch({ type: 'recaptcha_fail' });
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
      dispatch({ type: 'recaptcha_start' });
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
      {state.status === 'fail' && <div>fail</div>}
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
            {state.recaptcha && (
              <div className={[space['m-t--16']].join(' ')}>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onChange}
                />
              </div>
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
          {(state.status === 'success' || state.status === 'fail') && (
            <div className={[space['m-t--16']].join(' ')}>
              <Card type='set' />
            </div>
          )}
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='primary'
            title={
              state.loading ? (
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

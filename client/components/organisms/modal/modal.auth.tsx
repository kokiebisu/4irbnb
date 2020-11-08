import React, { useReducer } from 'react';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import modalStyles from './modal.module.scss';
import { Close } from '../../../public/svg/original';
import { Button } from '../../../components/atoms/button/button.component';

import { motion } from 'framer-motion';
import { ChevronDown } from '../../../public/svg/regular';
import { RegisterModalProps } from './props';
import { useToggleDispatch } from '../../../context/toggle';
import { useAuthDispatch, useAuthState } from '../../../context/auth';
import { Input } from '../../../components/atoms/input/input.component';

import { useFormik } from 'formik';

const Auth = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const methods = ['email', 'facebook', 'google', 'apple'];

  const formik = useFormik({
    initialValues: {
      country: '',
      tel: '',
    },
    onSubmit(values) {
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
    <div
      // style={{ height: 'calc(100% - 60px)' }}
      className={[space['p--24']].join(' ')}>
      <div className={[shape['w--full']].join(' ')}>
        <form onSubmit={formik.handleSubmit}>
          <div className={[space['m-b--8']].join(' ')}>
            <div>
              <Input type='text' direction='bottom' />
              <Input type='text' direction='top' />
            </div>
          </div>
          <div>
            <p
              className={[
                font['weight--100'],
                color['c--gray__0'],
                font['size--12'],
              ].join(' ')}>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div className={[space['m-t--18'], space['m-b--18']].join(' ')}>
            <Button type='primary' title='Continue' />
          </div>
        </form>
        <div
          style={{ zIndex: 1 }}
          className={[
            modalStyles['ba'],
            font['text--center'],
            layout['relative'],
          ].join(' ')}>
          <span
            style={{ zIndex: 3 }}
            className={[
              layout['relative'],
              space['p-h--4'],
              color['bg--white__0'],
              font['weight--100'],
              color['c--gray__0'],
              font['size--12'],
            ].join(' ')}>
            or
          </span>
        </div>
        <div>
          {methods.map((method, index) => {
            return (
              <div key={index} className={[space['m-v--14']].join(' ')}>
                <Button type='auth' platform={method} />
              </div>
            );
          })}
        </div>
        <div className={[space['m-t--4']].join(' ')}>
          <div className={[layout['inline-block'], space['m-r--6']].join(' ')}>
            <p
              className={[
                font['size--14'],
                font['weight--300'],
                color['c--gray__1'],
              ].join(' ')}>
              {authState.title === 'Log in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
          </div>
          <Button
            type='underline'
            onPress={switchAuth}
            title={authState.title === 'Log in' ? 'Sign up' : 'Log in'}
          />
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };
  return (
    <div className={[space['p--24']].join(' ')}>
      <form>
        <div>
          <Input type='text' direction='bottom' />
          <Input type='text' direction='top' />
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

export const Signup = () => {
  return (
    <div className={[space['p--24']].join(' ')}>
      <div>
        <Input type='text' direction='bottom' placeholder='First name' />
        <Input type='text' direction='top' placeholder='Last name' />
        <p>Make sure it matches the name on your government ID.</p>
      </div>
      <div>
        <h3>Birth date</h3>
        <div>three inputs</div>
        <p>
          To sign up, you need to be at least 18. Your birthday won't be shared
          with other people who use Airbnb.
        </p>
      </div>
      <div>
        <div>
          <Input type='text' placeholder='Email' />
        </div>
        <p>We'll email you trip confirmations and receipts</p>
      </div>
      <div>
        <div>
          <Input type='text' placeholder='Password' />
        </div>
        <p>
          By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
          <u>Terms of Service</u>, <u>Payments Terms of Service</u>,{' '}
          <u>Privacy Policy</u>, and <u>Nondiscrimination Policy</u>.
        </p>
      </div>
      <div>
        <Button type='primary' title='Agree and continue' />
      </div>
    </div>
  );
};

/**
 * Wrapper
 */
export const AuthModal: React.FC<RegisterModalProps> = () => {
  const toggleDispatch = useToggleDispatch();
  const authState = useAuthState();

  const displayContent = () => {
    switch (authState.display) {
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'auth':
        return <Auth />;
      default:
        return;
    }
  };

  const handleClose = () => {
    toggleDispatch({ type: 'close_register' });
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      style={{ width: 550 }}
      className={[
        shape['shadow--lg'],
        shape['br--16'],
        color['bg--white__0'],
      ].join(' ')}>
      <div
        style={{ height: 60 }}
        className={[
          layout['items-center'],
          color['b-b--white__2'],
          space['p-h--24'],
        ].join(' ')}>
        <div className={[layout['relative'], shape['w--full']].join(' ')}>
          <div
            className={[
              layout['al--0'],
              layout['t---3'],
              color['bg--transparent'],
            ].join(' ')}>
            <Button type='close' onPress={handleClose} />
          </div>
          <div className={[layout['all-center']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>{authState.title}</h3>
          </div>
        </div>
      </div>
      {displayContent()}
    </motion.div>
  );
};

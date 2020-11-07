import React from 'react';
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
import { useAuthState } from '../../../context/auth';
import { Input } from '../../../components/atoms/input/input.component';

import { useFormik } from 'formik';

const Auth = () => {
  const authState = useAuthState();
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

  console.log('fotm', formik.values.tel);

  return (
    <div
      style={{ height: 'calc(100% - 60px)' }}
      className={[space['p-h--24']].join(' ')}>
      <div className={[shape['w--full']].join(' ')}>
        <div className={[space['m-b--8'], space['m-t--35']].join(' ')}>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div
                style={{ height: 65 }}
                className={[
                  layout['relative'],
                  color['b-t--white__3'],
                  color['b-r--white__3'],
                  color['b-l--white__3'],
                  shape['btr--10'],
                  space['p-v--8'],
                  space['p-h--12'],
                  layout['items-center'],
                  layout['justify-between'],
                ].join(' ')}>
                <div>
                  <label
                    className={[
                      font['size--12'],
                      color['c--gray__2'],
                      font['weight--300'],
                    ].join(' ')}>
                    Country/Region
                  </label>
                  <input
                    style={{ height: 20 }}
                    className={[
                      space['p--0'],
                      shape['w--full'],
                      layout['block'],
                      color['b--0'],
                      font['size--16'],
                      font['weight--300'],
                      color['c__placeholder--black'],
                    ].join(' ')}
                    placeholder='Canada (+1)'
                  />
                </div>
                <div
                  style={{ right: 17 }}
                  className={[layout['absolute']].join(' ')}>
                  <ChevronDown width={12} />
                </div>
              </div>
              <Input
                type='text'
                category='tel'
                placeholder='Phone number'
                handleChange={formik.handleChange}
                value={formik.values.tel}
              />
              <button type='submit'>submit</button>
            </form>
          </div>
        </div>
        <div>
          <p
            className={[
              font['weight--100'],
              color['c--gray__0'],
              font['size--12'],
            ].join(' ')}>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.
          </p>
        </div>
        <div className={[space['m-t--18'], space['m-b--18']].join(' ')}>
          <Button
            type='plain'
            title='Continue'
            onPress={() => console.log('clicked Continue')}
          />
        </div>
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
                <Button type='login' platform={method} />
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
          <button
            className={[
              layout['inline-block'],
              font['size--14'],
              font['weight--500'],
              color['bg--transparent'],
            ].join(' ')}>
            <u>{authState.title === 'Log in' ? 'Sign up' : 'Log in'}</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  return <div>login</div>;
};

export const Signup = () => {
  return <div>register</div>;
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
      style={{ width: 550, height: 650 }}
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
          <Button
            onPress={handleClose}
            extendsTo={[
              layout['al--0'],
              layout['t--2'],
              color['bg--transparent'],
            ].join(' ')}>
            <Close width={16} height={16} stroke='black' strokeWidth={2} />
          </Button>
          <div className={[layout['all-center']].join(' ')}>
            <h3>{authState.title}</h3>
          </div>
        </div>
      </div>
      {displayContent()}
    </motion.div>
  );
};

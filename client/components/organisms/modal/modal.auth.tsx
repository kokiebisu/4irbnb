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
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { Template } from '../../../components/templates/template.component';

/**
 * Wrapper
 */
export const AuthModal: React.FC<RegisterModalProps> = () => {
  const toggleDispatch = useToggleDispatch();
  const authState = useAuthState();

  const displayContent = () => {
    switch (authState.display) {
      case 'login':
        return <Template type='login' />;
      case 'signup':
        return <Template type='signup' />;
      case 'auth':
        return <Template type='auth' />;
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

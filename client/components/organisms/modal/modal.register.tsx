import React from 'react';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import modalStyles from './modal.module.scss';
import { Close } from '../../../public/svg/original';
import { Button } from '../../../components/atoms/button/button.component';
import {
  emailLogin,
  facebookLogin,
  googleLogin,
  appleLogin,
  primary,
} from '../../../components/atoms/button/button.stories';
import { motion } from 'framer-motion';

export const RegisterModal: React.FC<{}> = () => {
  const logins = [
    { args: emailLogin.args, press: () => console.log('clicked email') },
    { args: facebookLogin.args, press: () => console.log('clicked facebook') },
    { args: googleLogin.args, press: () => console.log('clicked google') },
    { args: appleLogin.args, press: () => console.log('clicked apple') },
  ];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      style={{ width: 550, height: 650 }}
      className={[shape['shadow'], shape['br--16']].join(' ')}>
      <div
        style={{ height: 60 }}
        className={[
          layout['items-center'],
          color['b-b--white__2'],
          space['p-h--24'],
        ].join(' ')}>
        <div className={[layout['relative'], shape['w--full']].join(' ')}>
          <div className={[layout['al--0'], layout['t--2']].join(' ')}>
            <Close width={16} height={16} stroke='black' strokeWidth={2} />
          </div>
          <div className={[layout['all-center']].join(' ')}>Sign up</div>
        </div>
      </div>
      <div
        style={{ height: 'calc(100% - 60px)' }}
        className={[space['p-h--24']].join(' ')}>
        <div className={[shape['w-full']].join(' ')}>
          <div></div>
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
          <div className={[space['p-t--6'], space['p-b--8']].join(' ')}>
            <Button
              {...primary.args}
              onPress={() => console.log('clicked Continue')}>
              Continue
            </Button>
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
          {logins.map((login) => {
            return (
              <div className={[space['m-v--14']].join(' ')}>
                <Button {...login.args} onPress={login.press} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

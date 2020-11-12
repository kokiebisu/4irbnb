import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import { motion } from 'framer-motion';
import { Button } from '../../../components/atoms/button/button.component';
import { MenuModalProps } from './props';

export const MenuModal: React.FC<MenuModalProps> = ({ refProp }) => {
  return (
    <motion.div
      ref={refProp}
      exit={{ opacity: 0 }}
      className={[
        shape['br--15'],
        shape['shadow--lg'],
        layout['items-center'],
        color['bg--white__0'],
      ].join(' ')}
      style={{ width: 245, height: 220 }}>
      <div className={[shape['w--inherit']].join(' ')}>
        <div>
          <Button type='option' option='signup' bold />
        </div>
        <div>
          <Button type='option' option='login' />
        </div>
        <div>
          <Button to='/host/homes' type='option' option='home'>
            Host your home
          </Button>
        </div>
        <div>
          <Button type='option' option='experience' />
        </div>
        <div>
          <Button type='option' option='help' />
        </div>
      </div>
    </motion.div>
  );
};

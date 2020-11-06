import React from 'react';

import { motion } from 'framer-motion';
import { useToggleDispatch } from '../../../context/toggle';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import modal from './modal.module.scss';
import { Button } from '../../../components/atoms/button/button.component';

import { Lock } from '../../../public/svg/original';
import { PrivacyModalProps } from './props';

export const PrivacyModal: React.FC<PrivacyModalProps> = () => {
  const toggleDispatch = useToggleDispatch();

  const handlePress = () => {
    return toggleDispatch({ type: 'toggle_privacy' });
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      data-testid='modal'>
      <div
        className={[
          space['p-t--28'],
          space['p-b--28'],
          space['p-l--25'],
          space['p-r--25'],
          shape['br--8'],
          shape['shadow--lg'],
          color['bg--white__0'],
          modal['flex__privacy--content'],
          modal['m__privacy'],
        ].join(' ')}>
        <div>
          <div
            className={[
              layout['items-center'],
              space['m-t--6'],
              space['m-b--6'],
              space['m-l--0'],
              space['m-r--0'],
            ].join(' ')}>
            <div className={space['m-r--10']}>Your Privacy</div>
            <div className={space['r-t--1']}>
              <Lock width={16} fill='#428BFF' />
            </div>
          </div>
          <div className={space['m-b--30']}>
            <p
              className={[
                font['size--14'],
                font['weight--300'],
                font['lh--15'],
                color['c--gray__0'],
              ].join(' ')}>
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our{' '}
              <u>
                <b>Cookie Policy</b>
              </u>{' '}
              to learn more or go to Cookie Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div className={modal['flex__privacy--buttons']}>
          <motion.div
            className={[
              space['m-t--6'],
              space['m-b--6'],
              space['m-l--0'],
              modal['m-r--privacy'],
            ].join(' ')}>
            <Button
              tap={{ scale: 0.98 }}
              title='Save'
              type='privacy'
              onPress={handlePress}
            />
          </motion.div>
          <motion.div
            className={[
              space['m-t--6'],
              space['m-b--6'],
              space['m-l--0'],
              space['m-r--0'],
            ].join(' ')}>
            <Button
              tap={{ scale: 0.98 }}
              title='Cookie Preferences'
              type='privacy'
              inverse
              onPress={handlePress}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

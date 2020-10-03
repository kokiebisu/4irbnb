import React from 'react';

import { motion } from 'framer-motion';
import { useToggleDispatch } from '../../../context/toggle';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import { Button } from '../../../components/atoms/button/button.component';
import {
  cookie,
  cookieInverse,
} from '../../../components/atoms/button/button.stories';
import { Lock } from '../../../public/svg/original';

interface Props {
  extendsTo?: string;
  criteria?: any;
}

export const PrivacyModal: React.FC<Props> = ({ extendsTo, criteria }) => {
  let toggleDispatch;
  if (criteria) {
    toggleDispatch = useToggleDispatch();
  }

  const handlePress = () => {
    if (toggleDispatch) {
      return toggleDispatch({ type: 'toggle_privacy' });
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      data-testid='modal'
      className={extendsTo}>
      <div
        className={[
          space['p-t--28'],
          space['p-b--28'],
          space['p-l--25'],
          space['p-r--25'],
          shape['br--8'],
          shape['shadow'],
        ].join(' ')}>
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
              color['c--gray'],
            ].join(' ')}>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings.
          </p>
        </div>
        <motion.div
          className={[
            space['m-t--6'],
            space['m-b--6'],
            space['m-l--0'],
            space['m-r--0'],
          ].join(' ')}>
          <Button
            tap={{ scale: 0.98 }}
            {...cookie.args}
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
            {...cookieInverse.args}
            onPress={handlePress}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

import React from 'react';
import styles from 'styles/index.module.scss';
import { MagnifyGlass, Lock } from '../components/svg/icon';
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleDispatch, useToggleState } from '../context/toggle';

const PrivacyModal = () => {
  const toggleDispatch = useToggleDispatch();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      className={styles['modal']}>
      <div className={styles['modal__content']}>
        <div className={styles['modal__title']}>
          <div className={styles['modal__title--text']}>Your Privacy</div>
          <div className={styles['modal__title--icon']}>
            <Lock width={16} fill='#428BFF' />
          </div>
        </div>
        <div className={styles['modal__description']}>
          <p>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings.
          </p>
        </div>
        <motion.div className={styles['modal__button']}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleDispatch({ type: 'toggle_privacy' })}
            className={styles['button--save']}>
            Save Settings
          </motion.button>
        </motion.div>
        <motion.div className={styles['modal__button']}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('pressed')}
            className={styles['button--cookie']}>
            Cookie Preferences
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const toggleState = useToggleState();
  console.log('togglestate', toggleState);

  return (
    <>
      <aside className={styles['notice']}>
        <a href=''>Get the latest on our COVID-19 response</a>
      </aside>
      <div>
        <div className={styles['background']}>
          <picture>
            <source
              srcSet='/img/background1200.webp'
              media='(min-width:1200px)'></source>
            <source
              srcSet='/img/background960.jpg'
              media='(min-width:960px)'></source>
            <source
              srcSet='/img/background720.jpg'
              media='(min-width:720px)'></source>
            <source
              srcSet='/img/background320.webp'
              media='(min-width:320px)'></source>
            <img src='/img/background_default.png' alt='background'></img>
          </picture>
        </div>
        <header className={styles['header']}>
          <div className={styles['searchbar__sm']}>
            <MagnifyGlass stroke={'black'} strokeWidth={4} width={17} />
            <input placeholder='Where are you going' />
          </div>
        </header>
        <div className={styles['explore']}>
          <div className={styles['explore__title']}>
            <h3>Go Near</h3>
          </div>
          <div className={styles['explore__subtitle']}>
            <p>
              Settle in somewhere new. Discover nearby stays to live, work, or
              just relax.
            </p>
          </div>
          <div className={styles['explore__button']}>
            <a>Explore nearby</a>
          </div>
        </div>
        <AnimatePresence>
          {toggleState.privacy && <PrivacyModal />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HomePage;

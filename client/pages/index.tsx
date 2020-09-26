import React from 'react';
import styles from 'styles/index.module.scss';
import { MagnifyGlass, Lock } from '../components/svg/icon';

const Index = () => {
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
        <div className={styles['modal']}>
          <div className={styles['modal__content']}>
            <div className={styles['modal__title']}>
              <div className={styles['modal__title--text']}>Your Privacy</div>
              <div className={styles['modal__title--icon']}>
                <Lock width={16} fill='#428BFF' />
              </div>
            </div>
            <div className={styles['modal__description']}>
              <p>
                We use cookies to help personalize content, tailor and measure
                ads, and provide a safer experience. By navigating the site, you
                agree to the use of cookies to collect information on and off
                Airbnb. Read our Cookie Policy to learn more or go to Cookie
                Preferences to manage your settings.
              </p>
            </div>
            <div className={styles['modal__button']}>
              <button
                onClick={() => console.log('pressed')}
                className={styles['button--save']}>
                Save Settings
              </button>
            </div>
            <div className={styles['modal__button']}>
              <button
                onClick={() => console.log('pressed')}
                className={styles['button--cookie']}>
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

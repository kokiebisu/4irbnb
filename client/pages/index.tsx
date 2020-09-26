import React from 'react';
import styles from 'styles/index.module.scss';
import { MagnifyGlass } from 'components/svg/icon';

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
      </div>
    </>
  );
};

export default Index;

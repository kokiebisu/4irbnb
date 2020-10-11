import Link from 'next/link';
import styles from '../../../styles/index.module.scss';
import { MenuBarLogo } from 'public/svg/logo';
import { Login, Saved } from 'public/svg/regular';
import React from 'react';

export const MenuBar = () => {
  const items = [
    { component: <MenuBarLogo width={25} />, name: 'Explore', selected: true },
    { component: <Saved width={25} />, name: 'Saved', selected: false },
    { component: <Login width={25} />, name: 'Log in', selected: false },
  ];
  return (
    <div className={styles['menubar']}>
      {items.map((item, index) => {
        return (
          <Link key={index} href='/'>
            <a>
              <div
                className={
                  item.selected
                    ? [styles['menubar__item'], styles['selected']].join(' ')
                    : styles['menubar__item']
                }>
                <div className={styles['menubar__item--logo']}>
                  {item.component}
                </div>
                <div className={styles['menubar__item--text']}>
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

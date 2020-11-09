import Link from 'next/link';
import menubar from './menubar.module.scss';
import { MenuBarLogo } from '../../../public/svg/logo';
import { Login, Saved } from '../../../public/svg/regular';
import React from 'react';
import { MenuBarProps } from './props';

export const MenuBar: React.FC<MenuBarProps> = ({ extendsTo = '' }) => {
  const items = [
    { component: <MenuBarLogo width={25} />, name: 'Explore', selected: true },
    { component: <Saved width={25} />, name: 'Saved', selected: false },
    { component: <Login width={25} />, name: 'Log in', selected: false },
  ];
  return (
    <div className={extendsTo}>
      <div className={menubar['menubar']}>
        {items.map((item, index) => {
          return (
            <Link key={index} href='/'>
              <a>
                <div
                  className={
                    item.selected
                      ? [menubar['menubar__item'], menubar['selected']].join(
                          ' '
                        )
                      : menubar['menubar__item']
                  }>
                  <div className={menubar['menubar__item--logo']}>
                    {item.component}
                  </div>
                  <div className={menubar['menubar__item--text']}>
                    <p>{item.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

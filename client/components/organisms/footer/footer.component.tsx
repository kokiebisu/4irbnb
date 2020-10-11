import React from 'react';
import Link from 'next/link';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import styles from '../../../styles/index.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import { sections } from '../../../content/index';
import { Globe } from 'public/svg/original';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className={[
        color['b-t--white__2'],
        space['p-v--22'],
        color['bg--white__1'],
      ].join(' ')}>
      <div className={styles['container']}>
        <div
          className={[
            font['b-b--white__1'],
            styles['flex__footer--section'],
          ].join(' ')}>
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className={[
                  color['bt--white__2'],
                  space['nf-m-t--20'],
                  styles['p-b__footer--section'],
                  styles['w__footer--section'],
                ].join(' ')}>
                <div>
                  <h4
                    className={[font['size--12'], font['uppercase']].join(' ')}>
                    {section.name}
                  </h4>
                </div>
                <div
                  className={[
                    space['m-v--15'],
                    space['m-h--0'],
                    styles['grid__footer--items'],
                  ].join(' ')}>
                  {section.items.map((item, index) => {
                    return (
                      <div
                        className={[
                          space['m-v--15'],
                          space['m-h--0'],
                          space['m-v--15'],
                          styles['m__footer--item'],
                        ].join(' ')}
                        key={index}>
                        <Link href={item.url}>
                          <a
                            className={[
                              font['size--14'],
                              font['weight--300'],
                            ].join(' ')}>
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['flex__footer--others']}>
          <div
            className={[
              layout['items-center'],
              space['m-h--0'],
              space['m-v--20'],
            ].join(' ')}>
            <div>
              <button
                className={[
                  layout['items-center'],
                  space['m-r--10'],
                  color['bg--transparent'],
                  color['b--0'],
                ].join(' ')}>
                <Globe width={16} className={space['m-r--5']} />
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  English(CA)
                </u>
              </button>
            </div>
            <div>
              <button
                className={[
                  layout['items-center'],
                  color['bg--transparent'],
                  color['b--0'],
                ].join(' ')}>
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  $
                </u>
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  CAD
                </u>
              </button>
            </div>
          </div>
          <div className={layout['items-center']}>
            <div className={styles['footer__rights']}>
              <p
                className={[
                  font['size--14'],
                  font['weight--300'],
                  layout['inline-block'],
                ].join(' ')}>
                &copy; 2020 Airbnb, Inc. All rights reserved
              </p>
            </div>
            <div className={layout['items-center']}>
              <div className={styles['block__footer--dot']}>
                &nbsp;&nbsp;· &nbsp;
              </div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  Privacy
                </a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  &nbsp;Terms
                </a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  &nbsp;Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

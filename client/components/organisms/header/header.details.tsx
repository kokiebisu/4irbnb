import React, { useEffect, useState } from 'react';
import { DetailsHeaderProps } from './props';

import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import header from './header.module.scss';
import Link from 'next/link';
import { Star } from '../../../public/svg/original';
import { Button } from '../../../components/atoms/button/button.component';
import { AnimatePresence, motion } from 'framer-motion';

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({
  layoutType = 'room',
  spread = false,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const items =
    layoutType === 'experience'
      ? [
          { name: 'Photos' },
          { name: 'Amenities' },
          { name: 'Reviews' },
          { name: 'Location' },
        ]
      : [
          { name: 'Overview' },
          { name: 'The host' },
          { name: 'Reviews' },
          { name: 'Availability' },
        ];
  const displayHeight = layoutType === 'room' ? 1000 : 1600;
  return (
    <header
      style={{ height: 80 }}
      className={`${[color['bg--white__0'], shape['shadow--sm']].join(' ')}`}>
      <div
        className={`${
          spread
            ? [layout['container--spread']].join(' ')
            : [layout['container']].join(' ')
        } ${[shape['h--full']].join(' ')}`}>
        <div
          className={[
            shape['h--full'],
            header['display__transparent--md'],
            layout['items-center'],
            layout['justify-between'],
            layout['relative'],
          ].join(' ')}>
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            {items.map((item, index) => {
              return (
                <div key={index} className={[space['m-r--16']].join(' ')}>
                  <Link href=''>
                    <a
                      style={{ display: 'block' }}
                      className={[font['size--14'], color['c--gray__2']].join(
                        ' '
                      )}>
                      {item.name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <AnimatePresence>
            {scrollPosition > displayHeight && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={[layout['items-center']].join(' ')}>
                <div
                  className={[layout['flex'], layout['items-center']].join(
                    ' '
                  )}>
                  <div className={[space['m-r--16']].join(' ')}>
                    <h3
                      className={[
                        color['c--gray__2'],
                        font['size--16'],
                        font['weight--500'],
                      ].join(' ')}>
                      Add dates for prices
                    </h3>
                    <div
                      style={{ width: 100 }}
                      className={[
                        color['c--gray__2'],
                        font['size--21'],
                        font['weight--500'],
                      ].join(' ')}>
                      <div
                        className={[
                          layout['inline-block'],
                          space['m-r--4'],
                        ].join(' ')}>
                        <Star width={10} />
                      </div>
                      <span
                        className={[
                          layout['inline-block'],
                          font['size--12'],
                          space['m-r--4'],
                        ].join(' ')}>
                        <b>4.93</b>
                      </span>
                      <span
                        className={[
                          layout['inline-block'],
                          font['size--12'],
                          space['weight-100'],
                          color['c--white__3'],
                        ].join(' ')}>
                        (248)
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button type='primary' title='Check availability' />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

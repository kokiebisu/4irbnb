import { AnimatePresence, motion } from 'framer-motion';

import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import shape from '@styles/shape.module.scss';
import header from '@header/header.module.scss';
import { Star } from '@svg/original';
import { Button, $Button } from '@button';
import { useHandleScroll } from '@hooks/useHandleScroll';

/**
 * Renders the details header
 * @param {stirng} layoutType - Type of layout
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const DetailsHeader: React.FC<{
  layoutType?: string;
  spread?: boolean;
}> = ({ layoutType = 'room', spread = false }) => {
  const scrollPosition = useHandleScroll();
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
    <header className="h-16 bg-white shadow-sm">
      <div className="h-full">
        <div className="h-full flex md:invisible items-center justify-between relative">
          <div className="flex items-center">
            {items.map((item, index) => {
              return (
                <div key={index} className="mr-4">
                  <button
                    className="text-sm text-gray-400 block"
                    onClick={() => alert('hello')}
                  >
                    {item.name}
                  </button>
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
                className="flex items-center"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <h3
                      className={[
                        color['c--gray__2'],
                        font['size--16'],
                        font['weight--500'],
                      ].join(' ')}
                    >
                      Add dates for prices
                    </h3>
                    <div
                      style={{ width: 100 }}
                      className={[
                        color['c--gray__2'],
                        font['size--21'],
                        font['weight--500'],
                      ].join(' ')}
                    >
                      <div
                        className={[
                          layout['inline-block'],
                          space['m-r--4'],
                        ].join(' ')}
                      >
                        <Star width={10} />
                      </div>
                      <span
                        className={[
                          layout['inline-block'],
                          font['size--12'],
                          space['m-r--4'],
                        ].join(' ')}
                      >
                        <b>4.93</b>
                      </span>
                      <span
                        className={[
                          layout['inline-block'],
                          font['size--12'],
                          space['weight-100'],
                          color['c--white__3'],
                        ].join(' ')}
                      >
                        (248)
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant={$Button.PRIMARY}
                      title="Check availability"
                    />
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

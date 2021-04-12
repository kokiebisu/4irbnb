import { AnimatePresence, motion } from 'framer-motion';
import shape from '@styles/shape.module.scss';
import header from '@header/header.module.scss';

import { $Icon, Icon } from '@icons';

import { Button } from '@button';

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
    <header style={{ height: 80 }} className="bg-white shadow-sm">
      <div
        className={`${spread ? 'container-spread' : 'container'} ${[
          shape['h--full'],
        ].join(' ')}`}
      >
        <div
          className={`h-full items-center justify-between relative flex ${[
            header['display__transparent--md'],
          ].join(' ')}`}
        >
          <div className="flex items-center">
            {items.map((item, index) => {
              return (
                <div key={index} className="mr-4">
                  <button
                    className="text-sm block text-gray-700"
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
                    <h3 className="text-gray-700 text-md font-medium">
                      Add dates for prices
                    </h3>
                    <div
                      style={{ width: 100 }}
                      className="text-gray-700 text-lg font-medium"
                    >
                      <div className="inline-block mr-1">
                        <Icon
                          variant={$Icon.PROFILE}
                          profileType="star"
                          width={10}
                        />
                      </div>
                      <span className="inline-block text-sm mr-1">
                        <b>4.93</b>
                      </span>
                      <span className="inline-block text-sm font-thin text-gray-800">
                        (248)
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button variant="primary" title="Check availability" />
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

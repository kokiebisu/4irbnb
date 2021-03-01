/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from '@nextbnb/design/assets/svg/original';
import { Button, $BUTTON } from '@nextbnb/atoms-button';

/**
 * Renders the details header
 * @param {stirng} layoutType - Type of layout
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const DetailsHeader: React.FC<{
  layoutType?: string;
  spread?: boolean;
  scrollPosition?: number;
}> = ({ layoutType = 'room', spread = false, scrollPosition }) => {
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
      css={{
        height: 80,
        bg: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
      }}
    >
      <div
        css={{
          height: '100%',
        }}
        sx={{
          padding: ['0 20px', '0 20px', '0 20px'],
        }}
      >
        <div
          css={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
          sx={{
            display: ['none', 'none', 'flex'],
          }}
        >
          <div css={{ display: 'flex', alignItems: 'center' }}>
            {items.map((item, index) => {
              return (
                <div key={index} css={{ marginRight: 20 }}>
                  <button
                    css={{ display: 'block', fontSize: 14 }}
                    sx={{
                      color: 'grey.700',
                    }}
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
                css={{ display: 'flex', alignItems: 'center' }}
              >
                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <div css={{ marginRight: 16 }}>
                    <h3
                      sx={{
                        color: 'grey.700',
                      }}
                      css={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Add dates for prices
                    </h3>
                    <div
                      css={{
                        width: 100,
                        fontSize: 21,
                        fontWeight: 500,
                      }}
                      sx={{
                        color: 'grey.700',
                      }}
                    >
                      <div
                        css={{
                          display: 'inline-block',
                          marginRight: 4,
                        }}
                      >
                        <Star width={10} />
                      </div>
                      <span
                        css={{
                          display: 'inline-block',
                          fontSize: 12,
                          marginRight: 4,
                        }}
                      >
                        <b>4.93</b>
                      </span>
                      <span
                        css={{
                          display: 'inline-block',
                          fontSize: 12,
                          fontWeight: 100,
                        }}
                        sx={{
                          color: 'grey.400',
                        }}
                      >
                        (248)
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant={$BUTTON.primary}
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

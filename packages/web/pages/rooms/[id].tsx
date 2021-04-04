import { AnimatePresence, motion } from 'framer-motion';

import { useToggleState } from '@context/toggle';

import { Header, $Header } from '@header';
import { Footer } from '@footer';
import { Segment, $Segment } from '@template/rooms/id';
import { Card, $Card } from '@card';
import { Modal, $Modal } from '@modal';

import responsive from '@styles/responsive.module.scss';
import layout from '@styles/layout.module.scss';
import details from '@styles/details.module.scss';
import staysDetail from '@styles/staysDetail.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';

import { useHandleScroll } from '@hooks/useHandleScroll';

/**
 * Render the component for path /rooms/[id]
 */
const id: () => string | JSX.Element = () => {
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  return (
    <>
      <div>
        <div style={{ position: 'relative', zIndex: 9000 }}>
          <Header
            extendsTo={[details['w__wrapper']].join(' ')}
            variant={$Header.WHITE}
          />
        </div>
        <AnimatePresence>
          {scrollPosition > 506 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={[responsive['n_to_b--sm']].join(' ')}
              style={{
                position: 'fixed',
                top: 0,
                zIndex: 50,
                width: '100%',
              }}
            >
              <Header variant={$Header.DETAILS} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className={[].join(" ")}>
          <Segment
            extendsTo={[staysDetail["flex__panel"]].join(" ")}
            variant="panel"
          />
        </div> */}
        <div
          className={[layout['container'], staysDetail['m__content']].join(' ')}
        >
          <div className={[details['flex__details']].join(' ')}>
            <div className={[details['w__details--left']].join(' ')}>
              {/* <Section
                layoutType='room'
                extendsTo={[staysDetail['b__characteristics']].join(' ')}
                type='characteristics'
                characteristics={[
                  'house',
                  'sparkle',
                  'door',
                  'calendar',
                  'guidelines',
                ]}
              /> */}
              <Segment
                variant={$Segment.DESCRIPTION}
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
              />
              <Segment
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
                variant={$Segment.ARRANGEMENTS}
                title="Sleeping arrangements"
              />
              <Segment
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
                variant={$Segment.AMENITIES}
                title="Amenities"
              />
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56 }}
              className={[details['w__details--right']].join(' ')}
            >
              <Card
                variant={$Card.CHECKIN}
                extendsTo={[
                  layout['flex'],
                  layout['justify-end'],
                  layout['sticky'],
                  layout['t--80'],
                ].join(' ')}
              />
            </div>
          </div>
          <Segment
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            variant={$Segment.REVIEWS}
          />
          <Segment
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            variant={$Segment.HOST}
          />
          <Segment
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            variant={$Segment.KNOW}
          />
        </div>
        <div className={[layout['container']].join(' ')}>
          <Segment
            extendsTo={[
              color['b-t--white__2'],
              space['p-v--32'],
              color['bg--white__1'],
            ].join(' ')}
            variant={$Segment.OTHER}
          />
        </div>
        <Footer />
        <div
          className={[
            staysDetail['display__availability'],
            shape['w--full'],
          ].join(' ')}
          style={{ position: 'fixed', bottom: 0, zIndex: 9999 }}
        >
          <Modal variant="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 60,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <Modal
            variant={$Modal.MENU}
            extendsTo={[
              layout['flex'],
              layout['justify-center'],
              layout['items-center'],
              shape['h--100v'],
            ].join(' ')}
          />
        </div>
      )}
    </>
  );
};

export default id;

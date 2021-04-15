import { AnimatePresence, motion } from 'framer-motion';
import { useToggleState } from '@context/toggle';
import { Header, $Header } from '@header';
import { Footer } from '@footer';
import { Segment, $Segment } from '@template/rooms/id';
import { Card, $Card } from '@card';
import { Modal, $Modal } from '@modal';
import details from '@styles/details.module.scss';
import staysDetail from '@styles/staysDetail.module.scss';
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
        <div className="z-100 relative">
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
              className="hidden sm:block fixed top-0 z-50 w-full"
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
        <div className={`container ${[staysDetail['m__content']].join(' ')}`}>
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
              <Segment variant={$Segment.DESCRIPTION} />
              <Segment
                variant={$Segment.ARRANGEMENTS}
                title="Sleeping arrangements"
              />
              <Segment variant={$Segment.AMENITIES} title="Amenities" />
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56 }}
              className={[details['w__details--right']].join(' ')}
            >
              <div className="flex justify-end sticky top-32">
                <Card variant={$Card.CHECKIN} />
              </div>
            </div>
          </div>
          <Segment variant={$Segment.REVIEWS} />
          <Segment variant={$Segment.HOST} />
          <Segment variant={$Segment.KNOW} />
        </div>
        <div className="container">
          <Segment variant={$Segment.OTHER} />
        </div>
        <Footer />
        <div
          className={`fixed bottom-0 z-100 w-full ${[
            staysDetail['display__availability'],
          ].join(' ')}`}
        >
          <Modal variant="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div className="fixed top-0 z-60 bottom-0 left-0 right-0">
          <div className="flex justify-center items-center h-screen">
            <Modal variant={$Modal.MENU} />
          </div>
        </div>
      )}
    </>
  );
};

export default id;

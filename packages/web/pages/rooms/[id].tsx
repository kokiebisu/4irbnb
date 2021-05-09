import { AnimatePresence, motion } from 'framer-motion';
import { useToggleState } from '@context/toggle';
import { Header } from '@header';
import { Footer } from '@footer';
import { Segment } from '@template/rooms/id';
import { Card, $Card } from '@card';
import { Modal } from '@modal';
import details from '@styles/details.module.scss';
import { useHandleScroll } from '@hooks/useHandleScroll';
import { Bar } from '@bar';

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
            variant="white"
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
              <Header variant="details" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className={[].join(" ")}>
          <Segment
            
            variant="panel"
          />
        </div> */}
        <div className={`container md:mx-auto md:my-0`}>
          <div className={[details['flex__details']].join(' ')}>
            <div className="sm:w-6/10">
              {/* <Section
                layoutType='room'
                extendsTo='border-t border-gray-100 sm:border-none'
                type='characteristics'
                characteristics={[
                  'house',
                  'sparkle',
                  'door',
                  'calendar',
                  'guidelines',
                ]}
              /> */}
              <Segment variant="description" />
              <Segment variant="arrangements" title="Sleeping arrangements" />
              <Segment variant="amenities" title="Amenities" />
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56 }}
              className="hidden sm:w-4/10"
            >
              <div className="flex justify-end sticky top-32">
                <Card variant={$Card.CHECKIN} />
              </div>
            </div>
          </div>
          <Segment variant="reviews" />
          <Segment variant="host" />
          <Segment variant="know" />
        </div>
        <div className="container">
          <Segment variant="other" />
        </div>
        <Footer />
        <div className="fixed bottom-0 z-100 w-full sm:hidden">
          <Bar variant="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div className="fixed top-0 z-60 bottom-0 left-0 right-0">
          <div className="flex justify-center items-center h-screen">
            <Modal variant="menu" />
          </div>
        </div>
      )}
    </>
  );
};

export default id;

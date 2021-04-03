import { AnimatePresence, motion } from 'framer-motion';
import { useToggleState } from '@context/toggle';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import { categoryItems, anywhereItems, destinationItems } from '../content';
import { nearbyItems } from '../data/nearby';
import { Layout } from '@layout';
import { Animation } from '@animation';
import { Modal, $Modal } from '@modal';
import { Segment, $Segment } from 'components/segments/index/index';
import { Footer } from '@footer';
import { Bar, $Bar } from '@bar';
import { useHandleScroll } from '@hooks/useHandleScroll';
import { useHandleDocumentResize } from '@hooks/useHandleDocumentResize';
import { useTimeout } from '@hooks/useTimeout';
import { useTabTitle } from '@hooks/useTabTitle';

import { APIClient } from '../api/client';
import { useRouter } from 'next/router';

const LandingPage = ({ currentUser }) => {
  useTabTitle('Vacation Rentals, Homes, Experiences & Places - Airbnb');
  const loading = useTimeout(3000);
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  const pageHeight = useHandleDocumentResize();
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div>
        <div>
          <Bar variant={$Bar.COVID} />
        </div>
        <Segment variant="banner" data={currentUser || null} />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Segment variant={$Segment.NEARBY} />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Segment variant={$Segment.ANYWHERE} />
            </Layout>
            <Layout spread variant="landing">
              <Segment variant={$Segment.WORTH} />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Join millions of hosts on Airbnb"
            >
              <Segment variant={$Segment.CATEGORY} />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Inspiration for future getaways"
            >
              <Segment variant={$Segment.DESTINATIONS} />
            </Layout>
          </>
        ) : (
          <div className="my-11 flex items-center justify-center">
            <Animation type="loading" dark />
          </div>
        )}
        <Footer spread />
        <div className="fixed w-full z-50 bottom-0 flex justify-center px-5 md:px-10 lg:px-16 pb-6">
          <div>
            <Modal
              variant={$Modal.PRIVACY}
              criteria={toggleState.privacy}
              animate="slideup"
            />
          </div>
        </div>

        <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden"
            >
              <div className="fixed w-full z-30 bottom-0">
                <Bar
                  variant={$Bar.MENU}
                  extendsTo={[color['b-t--white__2']].join(' ')}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div className="fixed z-50 bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50">
            <div className="flex justify-center items-center h-screen">
              <Modal
                variant={$Modal.AUTH}
                animate="slideup"
                criteria={toggleState.auth}
                lock
              />
            </div>
          </div>
        )}
        {toggleState.globe && (
          <div className="fixed z-50 bottom-0 top-0 left-0 right-0 bg-black bg-opacity-30">
            <div className="flex justify-center items-center h-screen">
              <Modal
                variant={$Modal.GLOBE}
                extendsTo={[
                  shape['w--full'],
                  shape['h--full'],
                  space['p--40'],
                  shape['max-w--1100'],
                ].join(' ')}
                animate="slideup"
                criteria={toggleState.globe}
                lock
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = APIClient(context);
  try {
    const response = await client.get('/api/users/currentuser');
    return response.data;
  } catch (err) {
    return {};
  }
};

export default LandingPage;

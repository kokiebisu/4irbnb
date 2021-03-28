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
import { Template, $Template } from '@template/index';
import { Footer } from '@footer';
import { Bar, $Bar } from '@bar';
import { useHandleScroll } from '@hooks/useHandleScroll';
import { useHandleDocumentResize } from '@hooks/useHandleDocumentResize';
import { useTimeout } from '@hooks/useTimeout';
import { useTabTitle } from '@hooks/useTabTitle';

import { APIClient } from '../api/client';

const LandingPage = ({ currentUser }) => {
  useTabTitle('Vacation Rentals, Homes, Experiences & Places - Airbnb');
  const loading = useTimeout(3000);
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  const pageHeight = useHandleDocumentResize();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div>
        <div>
          <Bar variant={$Bar.COVID} />
        </div>
        <Template variant="banner" data={currentUser || null} />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Template variant={$Template.NEARBY} items={nearbyItems} />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Template variant={$Template.ANYWHERE} items={anywhereItems} />
            </Layout>
            <div className="my-12"></div>
            <Layout
              dark
              spread
              variant="landing"
              title="Meet Online Experiences"
              subtitle="Interactive activities you can do together, led by expert hosts."
            >
              <Template variant={$Template.ONLINE} sectionType="landing" dark />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Join millions of hosts on Airbnb"
            >
              <Template variant={$Template.CATEGORY} items={categoryItems} />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Inspiration for future getaways"
            >
              <Template
                variant={$Template.DESTINATIONS}
                items={destinationItems}
              />
            </Layout>
          </>
        ) : (
          <div className="my-11 flex items-center justify-center">
            <Animation type="loading" dark />
          </div>
        )}
        <Footer spread />
        <div className="fixed w-full z-50 bottom-0 flex justify-center px-16 pb-6">
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

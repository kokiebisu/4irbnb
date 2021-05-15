import { AnimatePresence, motion } from 'framer-motion';
import { useToggleState } from '@context/toggle';
import { Layout } from '@layout';
import { Animation } from '@animation';
import { Modal } from '@modal';
import { Segment } from '@template/index';
import { Footer } from '@footer';
import { Bar } from '@bar';
import { useHandleScroll } from '@hooks/useHandleScroll';
import { useHandleDocumentResize } from '@hooks/useHandleDocumentResize';
import { useTimeout } from '@hooks/useTimeout';
import { useTabTitle } from '@hooks/useTabTitle';

const LandingPage: React.FC<{}> = () => {
  useTabTitle('Vacation Rentals, Homes, Experiences & Places - Airbnb');
  const loading = useTimeout(3000);
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  const pageHeight = useHandleDocumentResize();

  return (
    <div className="min-h-screen overflow-x-hidden relative ">
      <div>
        <div>
          <Bar variant="covid" />
        </div>
        <Segment variant="banner" />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Segment variant="nearby" />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Segment variant="anywhere" />
            </Layout>
            <div className="my-7"></div>
            <Layout spread variant="landing">
              <Segment variant="worth" />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Join millions of hosts on Airbnb"
            >
              <Segment variant="category" />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Inspiration for future getaways"
            >
              <Segment variant="destinations" />
            </Layout>
          </>
        ) : (
          <div className="my-4 flex items-center justify-center">
            <Animation variant="loading" dark />
          </div>
        )}
        <Footer spread />
        <div className="fixed bottom-0 w-full z-50 flex justify-center">
          <div className="mt-0 mx-8 mb-8 sm:mx-16 md:mx-36 lg:mx-0">
            <Modal
              variant="privacy"
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
              className="sm:hidden"
            >
              <div className="fixed w-full z-30 bottom-0">
                <Bar variant="menu" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div className="fixed z-60 bottom-0 left-0 right-0 top-0 bg-blur">
            <div className="flex justify-center items-center h-screen">
              <Modal
                variant="auth"
                animate="slideup"
                criteria={toggleState.auth}
                lock
              />
            </div>
          </div>
        )}
        {toggleState.globe && (
          <div className="fixed z-60 bottom-0 left-0 right-0 top-0 bg-blur">
            <div className="flex justify-center items-center h-screen">
              <Modal
                variant="globe"
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

export default LandingPage;

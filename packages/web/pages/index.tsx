import { AnimatePresence, motion } from 'framer-motion';

import { useToggleState } from '@context/toggle';

import index from '@styles/index.module.scss';
import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';

import { Layout } from '@layout';

import { Animation } from '@animation';
import { Modal, $Modal } from '@modal';
import { Segment, $Segment } from '@template/index';
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
    <div
      style={{ overflowX: 'hidden' }}
      className={[layout['relative'], shape['min-h--fullv']].join(' ')}
    >
      <div>
        <div>
          <Bar variant={$Bar.COVID} />
        </div>
        <Segment variant="banner" />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Segment variant={$Segment.NEARBY} />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Segment variant={$Segment.ANYWHERE} />
            </Layout>
            <div className={space['m-v--32']}></div>
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
          <div
            className={[
              space['m-v--22'],
              layout['flex'],
              layout['items-center'],
              layout['justify-center'],
            ].join(' ')}
          >
            <Animation type="loading" dark />
          </div>
        )}
        <Footer spread />
        <div
          style={{ position: 'fixed', width: '100%', zIndex: 50 }}
          className={[
            layout['fb--0'],
            layout['flex'],
            layout['justify-center'],
          ].join(' ')}
        >
          <div className={[index['m__privacy']].join(' ')}>
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
              className={index['none__menubar']}
            >
              <div
                className={[layout['fixed'], shape['w--full']].join(' ')}
                style={{ zIndex: 30, bottom: 0 }}
              >
                <Bar
                  variant={$Bar.MENU}
                  extendsTo={[color['b-t--white__2']].join(' ')}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div
            style={{
              position: 'fixed',
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <div
              className={[
                layout['flex'],
                layout['justify-center'],
                layout['items-center'],
                shape['h--100v'],
              ].join(' ')}
            >
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
          <div
            style={{
              position: 'fixed',
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <div
              className={[
                layout['flex'],
                layout['justify-center'],
                layout['items-center'],
                shape['h--100v'],
              ].join(' ')}
            >
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

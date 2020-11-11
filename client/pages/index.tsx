import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import index from 'styles/index.module.scss';
import layout from 'styles/layout.module.scss';
import space from 'styles/space.module.scss';
import { categories, anywhere, onlines } from '../content';

import { Modal } from 'components/organisms/modal/modal.component';
import color from '../styles/color.module.scss';
import shape from '../styles/shape.module.scss';
import font from '../styles/font.module.scss';
import { useToggleState } from '../context/toggle';
import { Section } from 'components/organisms/section/section.component';
import { Footer } from 'components/organisms/footer/footer.component';
import { MenuBar } from 'components/organisms/menubar/menubar.component';
import { Layout } from 'layout/layout.component';
import { nearby } from '../data/stays';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from 'components/organisms/header/header.component';

const CovidNotice = () => {
  return (
    <aside
      className={[
        font['size--14'],
        color['bg--white__1'],
        layout['text-center'],
        space['p-v--20'],
        space['p-h--24'],
        layout['z--9999'],
      ].join(' ')}>
      <a href=''>
        <u>Get the latest on our COVID-19 response</u>
      </a>
    </aside>
  );
};

const LandingPage = () => {
  const toggleState = useToggleState();
  const wrapperRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const height = document.body.scrollHeight - document.body.clientHeight;
    setPageHeight(height);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{ overflowX: 'hidden' }}
      className={[layout['relative'], shape['min-h--fullv']].join(' ')}>
      <div ref={wrapperRef}>
        <CovidNotice />
        <Section type='banner' />
        <Layout type='section' spread>
          <Section type='nearby' items={nearby} />
        </Layout>
        <Layout type='section' title='Live anywhere' spread>
          <Section type='category' items={anywhere} />
        </Layout>
        <div className={space['m-v--32']}></div>
        <Layout
          dark
          spread
          type='section'
          title='Meet Online Experiences'
          subtitle='Interactive activities you can do together, led by expert hosts.'>
          <Section type='online' dark />
        </Layout>
        <Layout spread type='section' title='Join millions of hosts on Airbnb'>
          <Section type='category' items={categories} />
        </Layout>
        <Layout spread type='section' title='Destinations for future trips'>
          <Section type='destinations' />
        </Layout>
        <Footer spread />
        <Modal
          extendsTo={[
            layout['fb--0'],
            layout['z--9999'],
            layout['block'],
            index['modal__privacy'],
            index['m__privacy'],
          ].join(' ')}
          type='privacy'
          criteria={toggleState.privacy}
        />
        <AnimatePresence>
          {scrollPosition > 56 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'fixed',
                top: 0,
                zIndex: 99999,
                width: '100%',
              }}>
              <Header spread type='white' />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={index['none__menubar']}>
              <div
                className={[layout['fixed'], shape['w--full']].join(' ')}
                style={{ zIndex: 30, bottom: 0 }}>
                <MenuBar extendsTo={[color['b-t--white__2']].join(' ')} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {toggleState.auth && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              zIndex: 9999,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}>
            <Modal
              extendsTo={[
                layout['flex'],
                layout['justify-center'],
                layout['items-center'],
                shape['h--100v'],
              ].join(' ')}
              type='auth'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;

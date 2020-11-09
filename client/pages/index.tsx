import React from 'react';
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

  return (
    <div className={[layout['relative'], shape['min-h--fullv']].join(' ')}>
      <CovidNotice />
      <Section type='banner' />
      <Layout type='section'>
        <Section type='nearby' items={nearby} />
      </Layout>
      <Layout type='section' title='Live anywhere'>
        <Section type='category' items={anywhere} />
      </Layout>
      <div className={space['m-v--32']}></div>
      <Layout
        type='section'
        title='Meet Online Experiences'
        subtitle='Interactive activities you can do together, led by expert hosts.'
        dark>
        <Section type='online' />
      </Layout>
      <Layout type='section' title='Join millions of hosts on Airbnb'>
        <Section type='category' items={categories} />
      </Layout>
      <Layout type='section' title='Destinations for future trips'>
        <Section type='destinations' />
      </Layout>
      <Footer />
      <div className={index['none__menubar']}>
        <div style={{ zIndex: 30, position: 'fixed', bottom: 0 }}>
          <MenuBar extendsTo={[color['b-t--white__3']].join(' ')} />
        </div>
      </div>
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
  );
};

export default LandingPage;

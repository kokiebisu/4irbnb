import React from 'react';
import index from 'styles/index.module.scss';
import layout from 'styles/layout.module.scss';
import space from 'styles/space.module.scss';
import {
  destinations,
  destinationByCategories,
  categories,
  anywhere,
} from '../content/index';
import { Button } from 'components/atoms/button/button.component';

import {
  privacy as privacyModal,
  register as registerModal,
} from 'components/organisms/modal/modal.stories';
import { Modal } from 'components/organisms/modal/modal.component';
import color from '../styles/color.module.scss';
import shape from '../styles/shape.module.scss';
import font from '../styles/font.module.scss';
import { useToggleState } from '../context/toggle';
import { Header } from 'components/organisms/header/header.component';
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

  console.log('toggle', toggleState.privacy);

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
      <Layout
        type='section'
        title='Online Experiences'
        subtitle='Join interactive, global adventures with inspiring, kid-friendly hosts'
        dark>
        <Section type='online' items={anywhere} />
      </Layout>
      {/* <OnlineExperiences /> */}
      <Layout type='section' title='Join millions of hosts on Airbnb'>
        <Section type='category' items={categories} />
      </Layout>
      <Layout type='section' title='Destinations for future trips'>
        <Section type='destinations' />
      </Layout>
      <Footer />
      <div className={index['none__menubar']}>
        <MenuBar />
      </div>
      <Modal
        extendsTo={[
          layout['fb--0'],
          layout['z--9999'],
          layout['block'],
          index['modal__privacy'],
        ].join(' ')}
        type='privacy'
        criteria={toggleState.privacy}
      />
      <div>
        <Modal {...registerModal.args} criteria={toggleState.register} />
      </div>
    </div>
  );
};

export default LandingPage;

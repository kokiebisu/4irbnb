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

const Banner = () => {
  return (
    <>
      <div className={index['banner']}>
        <div className={[layout['all-sides']].join(' ')}>
          <div className={index['banner__background--picture']} style={{}}>
            <picture>
              <source
                srcSet='/img/background1200.webp'
                media='(min-width:1200px)'></source>
              <source
                srcSet='/img/background960.jpg'
                media='(min-width:960px)'></source>
              <source
                srcSet='/img/background720.jpg'
                media='(min-width:720px)'></source>
              <source
                srcSet='/img/background320.webp'
                media='(min-width:320px)'></source>
              <img src='/img/background_default.png' alt='background'></img>
            </picture>
          </div>
        </div>
        <div className={[layout['all-sides']].join(' ')}>
          <div
            className={[index['header__wrapper--md'], shape['h--full']].join(
              ' '
            )}>
            <div style={{ height: '100%' }}>
              <div className={[space['p-t--14'], index['container']].join(' ')}>
                <Header type='transparent' />
              </div>
              <div className={[color['c--white__0']].join(' ')}></div>
              <div
                className={[
                  index['container'],
                  layout['z--20'],
                  shape['h--75p'],
                  index['flex__explore'],
                ].join(' ')}>
                <div className={[space['m-v--10'], space['m-h--0']].join(' ')}>
                  <h3
                    className={[color['c--white__0'], font['size--28']].join(
                      ' '
                    )}>
                    Go Near
                  </h3>
                </div>
                <div
                  className={[
                    font['c--white__0'],
                    index['w__explore--subtitle'],
                    index['text__explore--subtitle'],
                  ].join(' ')}>
                  <p
                    className={[
                      index['size__explore--subtitle'],
                      font['weight--300'],
                      font['ls--3'],
                      color['c--white__0'],
                    ].join(' ')}>
                    Settle in somewhere new. Discover nearby stays to live,
                    work, or just relax.
                  </p>
                </div>
                <div
                  className={[
                    space['m-v--15'],
                    space['m-h--0'],
                    index['justify__explore--button'],
                  ].join(' ')}>
                  <Button type='banner' title='Explore all' to='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OnlineExperiences = () => {
  const cards = [
    { imgUrl: '', name: 'Decode the science of 2020 with Bill Nye' },
  ];
  return (
    <div
      className={[color['bg--black'], space['p-v--25'], space['p-h--0']].join(
        ' '
      )}>
      <div className={index['container']}>
        <div>
          <h3
            className={[
              font['weight--300'],
              color['c--white__0'],
              font['size--22'],
            ].join(' ')}>
            Online Experiences: Field Trips
          </h3>
        </div>
        <div>
          <p className={[color['c--white__0'], font['weight--100']].join(' ')}>
            Join interactive, global adventures with inspiring, kid-friendly
            hosts
          </p>
        </div>
        <div>
          {cards.map((card, index) => {
            return <div key={index}>{card.name}</div>;
          })}
        </div>
        <div
          className={[
            layout['inline-block'],
            color['bg--transparent'],
            color['b--white'],
            shape['br--8'],
          ].join(' ')}>
          <Button type='border' inverse to='/' />
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const toggleState = useToggleState();

  return (
    <div className={[layout['relative'], shape['min-h--fullv']].join(' ')}>
      <CovidNotice />
      <div>
        <Banner />
        <Layout type='section'>
          <Section type='nearby' items={nearby} />
        </Layout>
        <Layout type='section' title='Live anywhere'>
          <Section type='category' items={anywhere} />
        </Layout>
        <OnlineExperiences />
        <Layout type='section' title='Join millions of hosts on Airbnb'>
          <Section type='category' items={categories} />
        </Layout>
        <Layout type='section' title='Destinations for future trips'>
          <Section type='destinations' />
        </Layout>
        <Footer />
      </div>
      <div className={index['none__menubar']}>
        <MenuBar />
      </div>
      <div
        className={[
          color['bg--white__0'],
          layout['fb--0'],
          layout['z--9999'],
          layout['block'],
          index['m__modal--privacy'],
          shape['br--8'],
        ].join(' ')}>
        <Modal {...privacyModal.args} criteria={toggleState.privacy} />
      </div>
      <div>
        <Modal {...registerModal.args} criteria={toggleState.register} />
      </div>
    </div>
  );
};

export default LandingPage;

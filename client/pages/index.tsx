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

const BlackLivesMatter = () => {
  return (
    <div className={[space['p-v--22'], space['p-h--0']].join(' ')}>
      <div className={index['container']}>
        <div className={index['flex__blm--content']}>
          <div className={[index['w__blm--content']].join(' ')}>
            <h3
              className={[
                index['size__blm--title'],
                font['weight--500'],
                color['c--gray__4'],
              ].join(' ')}>
              We embrace a world where veryone belongs, and stand with
              #BlackLivesMatter.
            </h3>
          </div>
          <div
            className={[index['w__blm--content'], space['m-t--15']].join(' ')}>
            <p className={[font['weight--300'], color['c--gray__0']].join(' ')}>
              No one should have to encounter racism—no matter who you are,
              where you’re from, who you love, or who you worship.
              Discrimination is not tolerated in our community. Which is why
              when you agree to book or host on Airbnb, you pledge not to
              tolerate it either.
            </p>
          </div>
        </div>
        <div
          className={[
            layout['inline-block'],
            space['m-t--25'],
            space['m-b--40'],
          ].join(' ')}>
          <Button type='border' to='/' />
        </div>
      </div>
    </div>
  );
};

const DestinationTrips = () => {
  return (
    <div className={[space['m-h--0'], space['m-v--22']].join(' ')}>
      <div className={index['container']}>
        <div>
          <h3 className={[font['size--21'], font['weight--500']].join(' ')}>
            Destinations for future trips
          </h3>
        </div>
        <div
          className={[index['destinations__categories'], space['m-t--12']].join(
            ' '
          )}>
          {destinationByCategories.map((destinationByCategory, index) => {
            return (
              <div key={index}>
                <h5
                  className={[
                    font['size--14'],
                    font['no-wrap'],
                    font['weight--500'],
                    color['c--gray__0'],
                  ].join(' ')}>
                  {destinationByCategory.name}
                </h5>
              </div>
            );
          })}
        </div>
        <div className={layout['grid-c--2']}>
          {destinations.map((destination, index) => {
            return (
              <div
                key={index}
                className={[space['p-v--15'], space['p-h--0']].join(' ')}>
                <div>
                  <p
                    className={[
                      font['size--14'],
                      font['weight--300'],
                      font['c--gray__4'],
                    ].join(' ')}>
                    {destination.city}
                  </p>
                </div>
                <div>
                  <p
                    className={[
                      font['size--14'],
                      font['weight--300'],
                      color['c--gray__1'],
                    ].join(' ')}>
                    {destination.state}
                  </p>
                </div>
              </div>
            );
          })}
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
        <DestinationTrips />
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

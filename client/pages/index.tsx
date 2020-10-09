import React, { useState } from 'react';
import Link from 'next/link';
import styles from 'styles/index.module.scss';
import layout from 'styles/layout.module.scss';
import space from 'styles/space.module.scss';
import { MagnifyGlass, Lock, Saved, Login, Globe } from 'public/svg/regular';
import { MenuBarLogo, NameLogo, NoNameLogo } from 'public/svg/logo';
import { destinations, categories, cards, sections } from '../content/index';
import { Button } from 'components/atoms/button/button.component';
import {
  banner as bannerButton,
  border as borderButton,
  borderInverse as borderButtonInverse,
} from 'components/atoms/button/button.stories';
import {
  privacy as privacyModal,
  register as registerModal,
} from 'components/organisms/modal/modal.stories';
import { Modal } from 'components/organisms/modal/modal.component';
import color from '../styles/color.module.scss';
import shape from '../styles/shape.module.scss';
import font from '../styles/font.module.scss';
import { Card } from 'components/atoms/card/card.component';
import { useToggleDispatch, useToggleState } from '../context/toggle';
import { Header } from 'components/organisms/header/header.component';
import { RegisterModal } from 'components/organisms/modal/modal.register';

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
      <div className={styles['banner']}>
        <div className={[layout['all-sides']].join(' ')}>
          <div className={styles['banner__background--picture']} style={{}}>
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
          <div className={styles['header__wrapper--sm']}>
            <HeaderSmall />
          </div>
          <div className={styles['header__wrapper--md']}>
            <HeaderComponent />
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderSmall = () => {
  return (
    <>
      <div className={styles['container']}>
        <header
          className={[
            space['p-t--25'],
            space['p-r--0'],
            space['p-b--15'],
            space['p-l--0'],
          ].join(' ')}>
          <div className={[styles['searchbar__sm']].join(' ')}>
            <MagnifyGlass stroke={'black'} strokeWidth={4} width={17} />
            <input placeholder='Where are you going' />
          </div>
        </header>
        <div
          className={[
            layout['z--20'],
            shape['h--75p'],
            styles['flex__explore'],
          ].join(' ')}>
          <div className={[space['m-v--10'], space['m-h--0']].join(' ')}>
            <h3 className={[color['c--white__0'], font['size--28']].join(' ')}>
              Go Near
            </h3>
          </div>
          <div
            className={[
              font['c--white__0'],
              styles['w__explore--subtitle'],
              styles['text__explore--subtitle'],
            ].join(' ')}>
            <p
              className={[
                styles['size__explore--subtitle'],
                font['weight--300'],
                font['ls--3'],
                color['c--white__0'],
              ].join(' ')}>
              Settle in somewhere new. Discover nearby stays to live, work, or
              just relax.
            </p>
          </div>
          <div
            className={[
              space['m-v--15'],
              space['m-h--0'],
              styles['justify__explore--button'],
            ].join(' ')}>
            <Button {...bannerButton.args} to='/' />
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div style={{ height: '100%' }}>
      <Header type='transparent' />
      <div className={[color['c--white__0']].join(' ')}></div>
      <div
        className={[
          styles['container'],
          layout['justify-center'],
          layout['z--20'],
          shape['h--75p'],
          styles['flex__explore'],
        ].join(' ')}>
        <div className={[space['m-v--10'], space['m-h--0']].join(' ')}>
          <h3 className={[color['c--white__0'], font['size--28']].join(' ')}>
            Go Near
          </h3>
        </div>
        <div
          className={[
            font['c--white__0'],
            styles['w__explore--subtitle'],
            styles['text__explore--subtitle'],
          ].join(' ')}>
          <p
            className={[
              styles['size__explore--subtitle'],
              font['weight--300'],
              font['ls--3'],
              color['c--white__0'],
            ].join(' ')}>
            Settle in somewhere new. Discover nearby stays to live, work, or
            just relax.
          </p>
        </div>
        <div
          className={[
            space['m-v--15'],
            space['m-h--0'],
            styles['justify__explore--button'],
          ].join(' ')}>
          <Button {...bannerButton.args} to='/' />
        </div>
      </div>
    </div>
  );
};

const MenuBar = () => {
  const items = [
    { component: <MenuBarLogo width={25} />, name: 'Explore', selected: true },
    { component: <Saved width={25} />, name: 'Saved', selected: false },
    { component: <Login width={25} />, name: 'Log in', selected: false },
  ];
  return (
    <div className={styles['menubar']}>
      {items.map((item, index) => {
        return (
          <Link key={index} href='/'>
            <a>
              <div
                className={
                  item.selected
                    ? [styles['menubar__item'], styles['selected']].join(' ')
                    : styles['menubar__item']
                }>
                <div className={styles['menubar__item--logo']}>
                  {item.component}
                </div>
                <div className={styles['menubar__item--text']}>
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

const CategorySection = () => {
  return (
    <div
      className={[
        space['m-t--25'],
        space['m-r--0'],
        space['m-b--50'],
        space['m-l--0'],
      ].join(' ')}>
      <div
        className={[styles['container--carousel'], space['p-h--70']].join(' ')}>
        <div className={[styles['category-section__carousel']].join(' ')}>
          {cards.map((card, index) => {
            return <Card type='landing' key={index} card={card} />;
          })}
          <div className={styles['category-section__card--space']}></div>
        </div>
      </div>
    </div>
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
      <div className={styles['container']}>
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
          <Button {...borderButtonInverse.args} to='/' />
        </div>
      </div>
    </div>
  );
};

const BlackLivesMatter = () => {
  return (
    <div className={[space['p-v--22'], space['p-h--0']].join(' ')}>
      <div className={styles['container']}>
        <div className={styles['flex__blm--content']}>
          <div className={[styles['w__blm--content']].join(' ')}>
            <h3
              className={[
                styles['size__blm--title'],
                font['weight--500'],
                color['c--gray__4'],
              ].join(' ')}>
              We embrace a world where veryone belongs, and stand with
              #BlackLivesMatter.
            </h3>
          </div>
          <div
            className={[styles['w__blm--content'], space['m-t--15']].join(' ')}>
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
          <Button {...borderButton.args} to='/' />
        </div>
      </div>
    </div>
  );
};

const DestinationTrips = () => {
  return (
    <div className={[space['m-h--0'], space['m-v--22']].join(' ')}>
      <div className={styles['container']}>
        <div>
          <h3 className={[font['size--21'], font['weight--500']].join(' ')}>
            Destinations for future trips
          </h3>
        </div>
        <div
          className={[
            styles['destinations__categories'],
            space['m-t--12'],
          ].join(' ')}>
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <h5
                  className={[
                    font['size--14'],
                    font['no-wrap'],
                    font['weight--500'],
                    color['c--gray__0'],
                  ].join(' ')}>
                  {category.name}
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

const Footer = () => {
  return (
    <footer
      className={[
        color['b-t--white__2'],
        space['p-v--22'],
        color['bg--white__1'],
      ].join(' ')}>
      <div className={styles['container']}>
        <div
          className={[
            font['b-b--white__1'],
            styles['flex__footer--section'],
          ].join(' ')}>
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className={[
                  color['bt--white__2'],
                  space['nf-m-t--20'],
                  styles['p-b__footer--section'],
                  styles['w__footer--section'],
                ].join(' ')}>
                <div>
                  <h4
                    className={[font['size--12'], font['uppercase']].join(' ')}>
                    {section.name}
                  </h4>
                </div>
                <div
                  className={[
                    space['m-v--15'],
                    space['m-h--0'],
                    styles['grid__footer--items'],
                  ].join(' ')}>
                  {section.items.map((item, index) => {
                    return (
                      <div
                        className={[
                          space['m-v--15'],
                          space['m-h--0'],
                          space['m-v--15'],
                          styles['m__footer--item'],
                        ].join(' ')}
                        key={index}>
                        <Link href={item.url}>
                          <a
                            className={[
                              font['size--14'],
                              font['weight--300'],
                            ].join(' ')}>
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['flex__footer--others']}>
          <div
            className={[
              layout['items-center'],
              space['m-h--0'],
              space['m-v--20'],
            ].join(' ')}>
            <div>
              <button
                className={[
                  layout['items-center'],
                  space['m-r--10'],
                  color['bg--transparent'],
                  color['b--0'],
                ].join(' ')}>
                <Globe width={16} className={space['m-r--5']} />
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  English(CA)
                </u>
              </button>
            </div>
            <div>
              <button
                className={[
                  layout['items-center'],
                  color['bg--transparent'],
                  color['b--0'],
                ].join(' ')}>
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  $
                </u>
                <u className={[font['size--14'], space['m-r--7']].join(' ')}>
                  CAD
                </u>
              </button>
            </div>
          </div>
          <div className={layout['items-center']}>
            <div className={styles['footer__rights']}>
              <p
                className={[
                  font['size--14'],
                  font['weight--300'],
                  layout['inline-block'],
                ].join(' ')}>
                &copy; 2020 Airbnb, Inc. All rights reserved
              </p>
            </div>
            <div className={layout['items-center']}>
              <div className={styles['block__footer--dot']}>
                &nbsp;&nbsp;· &nbsp;
              </div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  Privacy
                </a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  &nbsp;Terms
                </a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={space['m-r--10']}>
                <a
                  className={[font['size--14'], font['weight--300']].join(' ')}>
                  &nbsp;Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  const toggleState = useToggleState();

  return (
    <div className={[layout['relative'], shape['min-h--fullv']].join(' ')}>
      <CovidNotice />
      <div>
        <Banner />
        <CategorySection />
        <OnlineExperiences />
        <BlackLivesMatter />
        <DestinationTrips />
        <Footer />
      </div>
      <div className={styles['none__menubar']}>
        <MenuBar />
      </div>
      <div
        className={[
          color['bg--white__0'],
          layout['fb--0'],
          layout['z--9999'],
          layout['block'],
          styles['m__modal--privacy'],
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

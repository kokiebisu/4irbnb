import React from 'react';
import Link from 'next/link';
import styles from 'styles/index.module.scss';
import layout from 'styles/layout.module.scss';
import space from 'styles/space.module.scss';
import {
  MagnifyGlass,
  Lock,
  Saved,
  Login,
  Globe,
  ChevronDown,
} from 'public/svg/regular';
import { Bars } from 'public/svg/original';
import { MenuBarLogo, NameLogo, NoNameLogo } from 'public/svg/logo';
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleDispatch, useToggleState } from '../context/toggle';
import { destinations, categories, cards, sections } from '../content/index';
import { Avatar } from 'public/svg/original';
import { Button } from 'components/atoms/button/button.component';
import {
  bannerButton,
  borderButton,
  borderButtonInverse,
  globe,
  host,
  menu,
} from 'components/atoms/button/button.stories';
import { privacy as privacyModal } from 'components/organisms/modal/modal.stories';
import { Modal } from 'components/organisms/modal/modal.component';
import color from '../styles/color.module.scss';
import shape from '../styles/shape.module.scss';
import modal from '../styles/modal.module.scss';

const CovidNotice = () => {
  return (
    <aside className={styles['notice']}>
      <a href=''>Get the latest on our COVID-19 response</a>
    </aside>
  );
};

const Banner = () => {
  return (
    <>
      <div className={styles['banner']}>
        <div className={styles['banner__background']}>
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
        <div className={styles['banner__content']}>
          <div className={styles['header__wrapper--sm']}>
            <HeaderSmall />
          </div>
          <div className={styles['header__wrapper--md']}>
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderSmall = () => {
  return (
    <>
      <div className={layout['container']}>
        <header className={styles['searchbar']}>
          <div className={styles['searchbar__sm']}>
            <MagnifyGlass stroke={'black'} strokeWidth={4} width={17} />
            <input placeholder='Where are you going' />
          </div>
        </header>
        <div className={styles['explore']}>
          <div className={styles['explore__title']}>
            <h3>Go Near</h3>
          </div>
          <div className={styles['explore__subtitle']}>
            <p>
              Settle in somewhere new. Discover nearby stays to live, work, or
              just relax.
            </p>
          </div>
          <div className={styles['explore__button']}>
            <Button {...bannerButton.args} to='/' />
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className={layout['container']}>
      <header className={styles['searchbar']}>
        <div className={styles['searchbar__nav']}>
          <div>
            <div className={styles['searchbar__logo--md']}>
              <NoNameLogo fill='white' width={30} height={32} />
            </div>
            <div className={styles['searchbar__logo--lg']}>
              <NameLogo fill='white' width={102} height={32} />
            </div>
          </div>
          <div className={styles['searchbar__nav--right']}>
            <div className={styles['searchbar__host']}>
              <Button {...host.args} to='/' />
            </div>
            <div className={styles['searchbar__globe']}>
              <Button {...globe.args} onPress={() => console.log('clicked')} />
            </div>
            <div>
              <Button {...menu.args} onPress={() => console.log('clicked')} />
            </div>
          </div>
        </div>
      </header>
      <div className={styles['searchbar__md']}></div>
      <div className={styles['explore']}>
        <div className={styles['explore__title']}>
          <h3>Go Near</h3>
        </div>
        <div className={styles['explore__subtitle']}>
          <p>
            Settle in somewhere new. Discover nearby stays to live, work, or
            just relax.
          </p>
        </div>
        <div className={styles['explore__button']}>
          <a>Explore nearby</a>
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
    <div className={styles['category-section']}>
      <div className={layout['container']}>
        <div className={styles['category-section__carousel']}>
          {cards.map((card, index) => {
            return (
              <div key={index} className={styles['category-section__card']}>
                <div className={styles['category-section__card--img']}>
                  <img src={card.imgUrl} alt='unique stays' />
                </div>
                <div className={styles['category-section__card--title']}>
                  <h3>{card.title}</h3>
                </div>
                <div className={styles['category-section__card--description']}>
                  <p>{card.description}</p>
                </div>
              </div>
            );
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
    <div className={styles['experiences']}>
      <div className={layout['container']}>
        <div className={styles['experiences__title']}>
          <h3>Online Experiences: Field Trips</h3>
        </div>
        <div className={styles['experiences__description']}>
          <p>
            Join interactive, global adventures with inspiring, kid-friendly
            hosts
          </p>
        </div>
        <div>
          {cards.map((card, index) => {
            return <div key={index}>{card.name}</div>;
          })}
        </div>
        <div className={styles['experiences__button']}>
          <Button {...borderButtonInverse.args} to='/' />
        </div>
      </div>
    </div>
  );
};

const BlackLivesMatter = () => {
  return (
    <div className={styles['blm']}>
      <div className={layout['container']}>
        <div className={styles['blm__title']}>
          <h3>
            We embrace a world where veryone belongs, and stand with
            #BlackLivesMatter.
          </h3>
        </div>
        <div className={styles['blm__description']}>
          <p>
            No one should have to encounter racism—no matter who you are, where
            you’re from, who you love, or who you worship. Discrimination is not
            tolerated in our community. Which is why when you agree to book or
            host on Airbnb, you pledge not to tolerate it either.
          </p>
        </div>
        <div className={styles['blm__button']}>
          <Button {...borderButton.args} to='/' />
        </div>
      </div>
    </div>
  );
};

const DestinationTrips = () => {
  return (
    <div className={styles['destinations']}>
      <div className={layout['container']}>
        <div className={styles['destinations__title']}>
          <h3>Destinations for future trips</h3>
        </div>
        <div className={styles['destinations__categories']}>
          {categories.map((category, index) => {
            return (
              <div className={styles['destinations__category']} key={index}>
                {category.name}
              </div>
            );
          })}
        </div>
        <div className={styles['destinations__cities']}>
          {destinations.map((destination, index) => {
            return (
              <div key={index} className={styles['destination']}>
                <div className={styles['destination__city']}>
                  {destination.city}
                </div>
                <div className={styles['destination__state']}>
                  {destination.state}
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
    <footer className={styles['footer']}>
      <div className={layout['container']}>
        <div className={styles['footer__sections']}>
          {sections.map((section, index) => {
            return (
              <div key={index} className={styles['footer__section']}>
                <div className={styles['footer__section--name']}>
                  <h4>{section.name}</h4>
                </div>
                <div className={styles['footer__section--items']}>
                  {section.items.map((item, index) => {
                    return (
                      <div className={styles['footer__item']} key={index}>
                        <Link href={item.url}>
                          <a>{item.name}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles['footer__others']}>
          <div className={styles['footer__buttons']}>
            <div className={styles['footer__button']}>
              <button>
                <Globe width={16} />
                <p>English(CA)</p>
              </button>
            </div>
            <div className={styles['footer__button']}>
              <button>
                <p>$</p>
                <p>CAD</p>
              </button>
            </div>
          </div>
          <div className={styles['footer__left']}>
            <div className={styles['footer__rights']}>
              <p>&copy; 2020 Airbnb, Inc. All rights reserved</p>
            </div>
            <div className={styles['footer__services']}>
              <div className={styles['footer__dot']}>&nbsp;&nbsp;· &nbsp;</div>
              <div className={styles['footer__service']}>
                <a>Privacy</a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={styles['footer__service']}>
                <a>&nbsp;Terms</a>
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className={styles['footer__service']}>
                <a>&nbsp;Sitemap</a>
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
    <div className={styles['page']}>
      <CovidNotice />
      <div>
        <Banner />
        <CategorySection />
        <OnlineExperiences />
        <BlackLivesMatter />
        <DestinationTrips />
        <Footer />
      </div>
      <div className={styles['menubar__wrapper']}>
        <MenuBar />
      </div>
      <div
        className={[
          color['bg--white'],
          layout['fb--0'],
          layout['z--9999'],
          layout['block'],
          styles['m__modal--privacy'],
          shape['br--8'],
        ].join(' ')}>
        <Modal {...privacyModal.args} criteria={toggleState.privacy} />
      </div>
    </div>
  );
};

export default LandingPage;

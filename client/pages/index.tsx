import React from 'react';
import Link from 'next/link';
import styles from 'styles/index.module.scss';
import { MagnifyGlass, Lock, Saved, Login } from '../components/svg/icon';
import { MenuBarLogo } from '../components/svg/logo';
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleDispatch, useToggleState } from '../context/toggle';
import { Globe } from '../public/svg/logo';
import { destinations, categories, cards, sections } from '../content/index';

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
        <div className={styles['header']}>
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
              <a>Explore nearby</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PrivacyModal = () => {
  const toggleDispatch = useToggleDispatch();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      className={styles['modal']}>
      <div className={styles['modal__content']}>
        <div className={styles['modal__title']}>
          <div className={styles['modal__title--text']}>Your Privacy</div>
          <div className={styles['modal__title--icon']}>
            <Lock width={16} fill='#428BFF' />
          </div>
        </div>
        <div className={styles['modal__description']}>
          <p>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings.
          </p>
        </div>
        <motion.div className={styles['modal__button']}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleDispatch({ type: 'toggle_privacy' })}
            className={styles['button--save']}>
            Save Settings
          </motion.button>
        </motion.div>
        <motion.div className={styles['modal__button']}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('pressed')}
            className={styles['button--cookie']}>
            Cookie Preferences
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
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
      {items.map((item) => {
        return (
          <Link href='/'>
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
      <div className={styles['category-section__carousel']}>
        {cards.map((card, index) => {
          return (
            <div className={styles['category-section__card']}>
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
  );
};

const OnlineExperiences = () => {
  const cards = [
    { imgUrl: '', name: 'Decode the science of 2020 with Bill Nye' },
  ];
  return (
    <div className={styles['experiences']}>
      <div className={styles['experiences__content']}>
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
            return <div>{card.name}</div>;
          })}
        </div>
        <div className={styles['experiences__button']}>
          <Link href='#'>
            <a>Explore all</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlackLivesMatter = () => {
  return (
    <div className={styles['blm']}>
      <div className={styles['blm__content']}>
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
          <Link href='#'>
            <a>Donate</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DestinationTrips = () => {
  return (
    <div className={styles['destinations']}>
      <div className={styles['destinations__content']}>
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
      <div className={styles['footer__content']}>
        <div className={styles['footer__sections']}>
          {sections.map((section, index) => {
            return (
              <div key={index} className={styles['footer__section']}>
                <div className={styles['footer__section--name']}>
                  <h4>{section.name}</h4>
                </div>
                <div className='footer__section--items'>
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
          <div className={styles['footer__rights']}>
            <p>&copy; 2020 Airbnb, Inc. All rights reserved</p>
          </div>
          <div className={styles['footer__services']}>
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
      <MenuBar />
      <AnimatePresence>
        {toggleState.privacy && <PrivacyModal />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import Link from 'next/link';
import styles from 'styles/index.module.scss';
import { MagnifyGlass, Lock, Saved, Login } from '../components/svg/icon';
import { MenuBarLogo } from '../components/svg/logo';
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleDispatch, useToggleState } from '../context/toggle';
import { createReadStream } from 'fs';
import { Globe } from '../public/svg/logo';

const CovidNotice = () => {
  return (
    <aside className={styles['notice']}>
      <a href=''>Get the latest on our COVID-19 response</a>
    </aside>
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
  const cards = [
    {
      imgUrl: '/img/unique_stays.jpg',
      title: 'Unique stays',
      description: 'Spaces that are more than just a place to sleep.',
    },
    {
      imgUrl: '/img/unique_stays.jpg',
      title: 'Unique stays',
      description: 'Spaces that are more than just a place to sleep.',
    },
    {
      imgUrl: '/img/unique_stays.jpg',
      title: 'Unique stays',
      description: 'Spaces that are more than just a place to sleep.',
    },
  ];
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
        <div
          style={{
            width: '12px',
            backgroundColor: 'transparent',
            height: '100%',
          }}></div>
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
  const destinations = [
    { city: 'New York', state: 'New York' },
    { city: 'Phoenix', state: 'Arizona' },
    {
      city: 'Atlanta',
      state: 'Georgia',
    },
    {
      city: 'Chicago',
      state: 'Illinois',
    },
    {
      city: 'Miami',
      state: 'Florida',
    },
    {
      city: 'San Diego',
      state: 'California',
    },
    {
      city: 'San Francisco',
      state: 'California',
    },
    {
      city: 'Nashville',
      state: 'Tennessee',
    },
    {
      city: 'Seattle',
      state: 'Washington',
    },
    {
      city: 'Boston',
      state: 'Massachusetts',
    },
    {
      city: 'Philadelphia',
      state: 'Pennsylvania',
    },
    {
      city: 'Dallas',
      state: 'Texas',
    },
    {
      city: 'Austin',
      state: 'Texas',
    },
    {
      city: 'Washington',
      state: 'District of Columbia',
    },
    {
      city: 'New Orleans',
      state: 'Louisiana',
    },
    {
      city: 'San Antonio',
      state: 'Texas',
    },
    {
      city: 'Houston',
      state: 'Texas',
    },
    {
      city: 'Los Angeles',
      state: 'California',
    },
    {
      city: 'London',
      state: 'United Kingdom',
    },
    {
      city: 'Paris',
      state: 'France',
    },
    {
      city: 'Memphis',
      state: 'Tennessee',
    },
    {
      city: 'Rome',
      state: 'Italy',
    },
    {
      city: 'Barcelona',
      state: 'Spain',
    },
    {
      city: 'Amsterdam',
      state: 'Netherlands',
    },
    {
      city: 'Lexington',
      state: 'Kentucky',
    },
  ];
  const categories = [
    { name: 'Destinations for arts & culture' },
    { name: 'Destinations for outdoor adventure' },
    { name: 'Mountain cabins' },
    { name: 'Beach destinations' },
    { name: 'Popular destinations' },
  ];
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
  const sections = [
    {
      name: 'About',
      items: [
        { url: '#', name: 'How Airbnb works' },
        { url: '#', name: 'Newsroom' },
        { url: '#', name: 'Airbnb Plus' },
        { url: '#', name: 'Airbnb Luxe' },
        { url: '#', name: 'Hotel Tonight' },
        { url: '#', name: 'Airbnb for Work' },
        { url: '#', name: 'Olympics' },
        { url: '#', name: 'Careers' },
      ],
    },
    {
      name: 'Community',
      items: [
        { url: '#', name: 'Diversity & Belonging' },
        { url: '#', name: 'Accessibility' },
        { url: '#', name: 'Airbnb Associates' },
        { url: '#', name: 'Frontline Stays' },
        { url: '#', name: 'Invite friends' },
      ],
    },
    {
      name: 'Host',
      items: [
        { url: '#', name: 'Host your home' },
        { url: '#', name: 'Host an Online Experience' },
        { url: '#', name: 'Host an Experience' },
        { url: '#', name: 'Message from CEO Brian Chesky' },
        { url: '#', name: 'Responsible hosting' },
        { url: '#', name: 'Open Homes' },
        { url: '#', name: 'Resource Centre' },
        { url: '#', name: 'Community Centre' },
      ],
    },
    {
      name: 'Support',
      items: [
        { url: '#', name: 'Updates for COVID-19' },
        { url: '#', name: 'Help Centre' },
        { url: '#', name: 'Cancellation options' },
        { url: '#', name: 'Neighbourhood Support' },
        { url: '#', name: 'Trust & Safety' },
      ],
    },
  ];
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
    <>
      <CovidNotice />
      <div className={styles['background']}>
        <div className={styles['image']}>
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
        <header className={styles['header']}>
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
      <CategorySection />
      <OnlineExperiences />
      <BlackLivesMatter />
      <DestinationTrips />
      <Footer />
      {/* <MenuBar />
      {/* <AnimatePresence>
        {toggleState.privacy && <PrivacyModal />}
      </AnimatePresence> */}
    </>
  );
};

export default LandingPage;

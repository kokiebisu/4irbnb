import { useRef, useState } from 'react';
import Router from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '@styles/index.module.scss';
import header from '@header/header.module.scss';

import { Modal, $Modal } from '@modal';
import { Button } from '@button';
import { Prototype } from '@prototype/searchbar';

import { Icon } from '@icons';
import { useToggleDispatch, useToggleState } from '@context/toggle';
import { Content } from '@button/button-transparent/content.transparent';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

/**
 * Renders the transparent header
 */
export const LandingHeader: React.FC<{
  category?: any;
  setCategory?: any;
  data?: any;
  criteria?: any;
}> = ({ data, category, setCategory, criteria }) => {
  const toggleState = useToggleState();
  const searchbarRef = useRef();
  const [expanded, setExpanded] = useState(false);
  const toggleDispatch = useToggleDispatch();

  useOnClickOutside(searchbarRef, () => {
    toggleDispatch({
      type: 'toggle_reset',
    });
    setExpanded(!expanded);
  });

  const types: { [type: string]: { title: string; onClick: any } } = {
    stay: {
      title: 'Places to stay',
      onClick: () => setCategory('stay'),
    },
    experiences: {
      title: 'Experiences',
      onClick: () => setCategory('experiences'),
    },
    online: {
      title: 'Online Experiences',
      onClick: () => Router.push('/s/experiences/online'),
    },
  };

  return (
    <header
      className={`${
        expanded ? 'pt-4 pb-32' : 'py-3'
      } relative container-spread transition ease-in-out duration-100`}
    >
      <div className="md:none none md:flex justify-between relative">
        <div>
          <div className="mt-1 block lg:hidden">
            <Icon
              variant={'logo'}
              logoType="noName"
              fill={criteria ? 'white' : 'red'}
              width={30}
              height={32}
            />
          </div>
          <div className="hidden lg:block mt-1">
            <Icon
              variant={'logo'}
              logoType="name"
              fill={criteria ? 'white' : 'red'}
              width={102}
              height={32}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className={`mx-1 ${[styles['searchbar__host']].join(' ')}`}>
            <Button
              variant="transparent"
              inverse={criteria}
              onClick={() => Router.push('/host/homes')}
            >
              <Content kind="host" inverse={criteria} />
            </Button>
          </div>
          <div className="mx-1">
            <Button
              variant="transparent"
              inverse={criteria}
              onClick={() => toggleDispatch({ type: 'toggle_globe' })}
            >
              <Content kind="globe" inverse={criteria} />
            </Button>
          </div>
          <div className="ml-1">
            <Button
              variant="menu"
              inverse={criteria}
              authenticated={data}
              onClick={() => toggleDispatch({ type: 'toggle_menu' })}
            />
          </div>
        </div>
        <div className="z-70 absolute bg-transparent t-1/2">
          <Modal
            variant={$Modal.MENU}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div
        className={`top-8/10 sm:top-2/10 px-6 hidden sm:block absolute w-full left-1/2 bottom-0 z-50`}
        style={{
          maxWidth: 760,
          transform: 'translate(-50%, 0)',
          height: 'fit-content',
        }}
      >
        <AnimatePresence>
          {criteria ? (
            <motion.div
              className="relative"
              key="transparentmodal"
              exit={{
                y: 0,
                scale: 0.3,
                width: 500,
                opacity: 0,
              }}
              transition={{ type: 'tween', duration: 0.2 }}
              initial={{ y: -100, scale: 0.3, opacity: 0, width: 500 }}
              animate={{ y: 0, scale: 1, opacity: 1, width: 'auto' }}
            >
              <div className="relative">
                <div className="mt-3 mb-4">
                  <div className="flex items-center justify-center">
                    {Object.keys(types).map((type, index) => {
                      return (
                        <div key={index} className="mx-4">
                          <button onClick={types[type].onClick}>
                            <div
                              className={`pb-3 ${
                                category === type
                                  ? header['landing__bb--selected']
                                  : header['landing__bb']
                              }`}
                            >
                              <p className="text-white text-xs md:text-md font-medium md:font-light">
                                {types[type].title}
                              </p>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Prototype type={category} transparent />
              </div>
            </motion.div>
          ) : (
            <div>
              {expanded ? (
                <motion.div
                  key="modal"
                  className="relative"
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="relative">
                    <div className="mb-4 mt-6">
                      <div className="flex justify-center">
                        {Object.keys(types).map((type, index) => {
                          return (
                            <div key={index} className="mx-4">
                              <button onClick={() => setCategory('stay')}>
                                <div className="pb-3">
                                  <p
                                    className={`${
                                      expanded ? 'text-black' : 'text-white'
                                    } font-medium md:font-light text-xs md:text-md`}
                                  >
                                    {types[type].title}
                                  </p>
                                </div>
                                <div className="flex justify-center">
                                  {/* {category === type && (
                                    <motion.div
                                      whileHover={{ width: 15 }}
                                      style={{
                                        width: 3,
                                        height: 2,
                                        backgroundColor: "white",
                                      }}
                                    />
                                  )} */}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div ref={searchbarRef}>
                      <Prototype type={category} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="minimodal"
                  className="-top-14 md:t-0 absolute w-full flex"
                >
                  <motion.div
                    className="relative l-8 md:l-0"
                    initial={{ width: 0, y: 50, opacity: 0 }}
                    exit={{
                      width: 0,
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{ width: 240, y: 0, opacity: 1 }}
                  >
                    <Button
                      variant="searchbar"
                      onClick={() => setExpanded(!expanded)}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

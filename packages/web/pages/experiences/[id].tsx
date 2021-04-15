import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Header, $Header } from '@header';
import { Segment, $Segment } from 'components/segments/experiences/id';
import { Modal, $Modal } from '@modal';
import { Footer } from '@footer';
import { useToggleState } from '@context/toggle';
import details from '@styles/details.module.scss';
import staysDetail from '@styles/staysDetail.module.scss';

/** sample data */
import { experiences } from '../../data/experiences';
import { useTabTitle } from '@hooks/useTabTitle';

/**
 * Renders the component for path /experiences/[id]
 */
const id: () => string | JSX.Element = () => {
  const router = useRouter();
  const { id: experienceID }: { id?: string } = router.query;
  useTabTitle(experiences[experienceID].title);

  const toggleState = useToggleState();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="relative z-100">
          <Header variant={$Header.WHITE} />
        </div>
        <AnimatePresence>
          {scrollPosition > 470 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed top-0 z-60 w-full"
            >
              <Header variant={$Header.DETAILS} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(' ')}>
          {experiences[experienceID] && (
            <Segment
              layoutType={$Segment.EXPERIENCES}
              extendsTo={[staysDetail['flex__panel']].join(' ')}
              variant="panel"
              {...experiences[experienceID]}
            />
          )}
        </div>
        <div className={`container ${[staysDetail['m__content']].join(' ')}`}>
          <div className={[details['flex__details']].join(' ')}>
            <div className={[details['w__details--left']].join(' ')}>
              <div className={[staysDetail['b__characteristics']].join(' ')}>
                {experiences[experienceID] && (
                  <Segment
                    layoutType={$Segment.EXPERIENCES}
                    variant="characteristics"
                    {...experiences[experienceID]}
                  />
                )}
              </div>
              {experiences[experienceID] && (
                <div className="border-top border-gray-600 py-6">
                  <Segment
                    layoutType="experience"
                    variant={$Segment.DESCRIPTION}
                    {...experiences[experienceID]}
                  />
                </div>
              )}
              {experiences[experienceID] && (
                <div className="border-top border-gray-600 py-6">
                  <Segment
                    variant={$Segment.PARTICIPATE}
                    {...experiences[experienceID]}
                  />
                </div>
              )}
              {experiences[experienceID]?.necessities && (
                <div className="border-top border-gray-600 py-6">
                  <Segment
                    variant={$Segment.BRING}
                    {...experiences[experienceID]}
                  />
                </div>
              )}
            </div>
            <div className="hidden sm:block pt-8 pb-12 w-4/10">
              <div
                style={{ top: 82 }}
                className="flex justify-end sticky top-24"
              >
                {experiences[experienceID] && (
                  <Modal
                    variant={$Modal.BOOKING}
                    {...experiences[experienceID]}
                  />
                )}
              </div>
            </div>
          </div>
          {experiences[experienceID] && (
            <div className="border-top border-gray-600 py-8">
              <Segment variant={$Segment.HOST} {...experiences[experienceID]} />
            </div>
          )}
          {experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment variant={$Segment.EXPERIENCES} />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment
                layoutType="experience"
                variant={$Segment.REVIEWS}
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment
                layoutType="experience"
                variant={$Segment.AVAILABLE}
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div className="border-top border-gray-600 pt-8 pb-16">
              <Segment layoutType="experience" variant={$Segment.KNOW} />
            </div>
          ) : null}
        </div>
        <Footer />
        <div
          className={`fixed bottom-0 z-100 w-full ${[
            staysDetail['display__availability'],
          ].join(' ')}`}
        >
          {/* <Modal variant="availability" /> */}
        </div>
      </div>
      {toggleState.auth && (
        <div className="fixed top-0 z-60 bottom-0 left-0 right-0">
          <Modal variant={$Modal.MENU} />
        </div>
      )}
    </>
  );
};

export default id;

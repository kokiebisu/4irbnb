import React from 'react';
import { useRouter } from 'next/router';
import { useToggleState } from '@context/toggle';
import { Prototype } from '@prototype/homes';
import { Modal, $Modal } from '@modal';
import homes from '@styles/homes.module.scss';
import { useTabTitle } from '@hooks/useTabTitle';
import '../../global/string';

/**
 * Renders the component for path /s/homes
 */
const Homes = () => {
  const router = useRouter();
  const {
    type,
    city = 'location',
    stayType,
    characteristics,
  }: {
    type?: string;
    city?: string;
    stayType?: string[] | string;
    characteristics?: string;
  } = router.query;
  const toggleState = useToggleState();
  useTabTitle(`${city.capitalize()} · Stays · Airbnb`);
  return (
    <div className={[homes['display__content']].join(' ')}>
      <div className={[homes['w__section']].join(' ')}>
        <Prototype
          variant={type}
          city={city}
          stayType={stayType}
          characteristics={characteristics}
        />
        <div
          className="hidden md:block absolute bg-gray-600 overflow-hidden h-full top-0 bottom-0 right-0 left-auto"
          style={{
            width: 'calc(100% - 840px)',
          }}
        >
          map
        </div>
        {toggleState.auth && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-60 bg-blur">
            <div className="flex justify-center items-center h-screen">
              <Modal variant={$Modal.MENU} animate="slideup" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homes;

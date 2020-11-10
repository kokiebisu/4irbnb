import * as React from 'react';

import { Header } from '../../components/organisms/header/header.component';
import { Footer } from '../../components/organisms/footer/footer.component';

import layout from '../../styles/layout.module.scss';
import details from '../../styles/details.module.scss';
import staysDetail from '../../styles/staysDetail.module.scss';
import color from '../../styles/color.module.scss';
import shape from '../../styles/shape.module.scss';
import space from '../../styles/space.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Card } from '../../components/atoms/card/card.component';
import { Modal } from 'components/organisms/modal/modal.component';

const id: () => string | JSX.Element = () => {
  return (
    <>
      <div>
        <Header extendsTo={[details['w__wrapper']].join(' ')} type='white' />
      </div>
      <div className={[].join(' ')}>
        <Section
          extendsTo={[staysDetail['flex__panel']].join(' ')}
          type='panel'
        />
      </div>
      <div
        className={[layout['container'], staysDetail['m__content']].join(' ')}>
        <div className={[details['flex__details']].join(' ')}>
          <div className={[details['w__details--left']].join(' ')}>
            <Section
              layoutType='room'
              extendsTo={[staysDetail['b__characteristics']].join(' ')}
              type='characteristics'
              characteristics={[
                'house',
                'sparkle',
                'door',
                'calendar',
                'guidelines',
              ]}
            />
            <Section
              type='description'
              extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            />
            <Section
              extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
              type='arrangements'
              title='Sleeping arrangements'
            />
            <Section
              extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
              type='amenities'
              title='Amenities'
            />
          </div>
          <div
            style={{ paddingBottom: 56 }}
            className={[details['w__details--right']].join(' ')}>
            <Card
              type='checkin'
              extendsTo={[
                layout['flex'],
                layout['justify-end'],
                layout['sticky'],
                layout['t--78'],
              ].join(' ')}
            />
          </div>
        </div>
        <Section
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='reviews'
        />
        <Section
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='host'
        />
        <Section
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='know'
        />
        <>
          {/* 
          <MoreHomes />
          <ToDoNear />
          <MoreLocations /> */}
        </>
      </div>
      <Section
        extendsTo={[
          color['b-t--white__2'],
          space['p-v--32'],
          color['bg--white__1'],
        ].join(' ')}
        type='other'
      />
      <Footer />
      <div
        className={[
          staysDetail['display__availability'],
          shape['w--full'],
        ].join(' ')}
        style={{ position: 'fixed', bottom: 0, zIndex: 9999 }}>
        <Modal type='availability' />
      </div>
    </>
  );
};

export default id;

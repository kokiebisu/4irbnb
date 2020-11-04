import * as React from 'react';

// Containers
// import { ToDoNear } from '../../components/stays/containers/ToDoNear';
// import { MoreLocations } from '../../components/stays/containers/MoreLocations';
// import { PlaceInfo } from '../../components/stays/containers/PlaceInfo';
// import { StayInfo } from '../../components/stays/containers/StayInfo';
// import { MoreHomes } from '../../components/stays/containers/MoreHomes';
// import { KeepInMind } from '../../components/stays/containers/KeepInMind';
// import { Characteristics } from '../../components/stays/containers/Characteristics';

// Functions
// import { MainInfo } from '../../components/stays/functions/MainInfo';
// import { CheckInCard } from '../../components/stays/functions/CheckInCard';
// import { HostedBy } from '../../components/stays/functions/HostedBy';

import { Header } from '../../components/organisms/header/header.component';
import { Footer } from '../../components/organisms/footer/footer.component';

import layout from '../../styles/layout.module.scss';
import details from '../../styles/details.module.scss';
import staysDetail from '../../styles/staysDetail.module.scss';
import color from '../../styles/color.module.scss';
import space from '../../styles/space.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Card } from '../../components/atoms/card/card.component';

const id: () => string | JSX.Element = () => {
  return (
    <>
      <div
        style={{ top: 0, zIndex: 9999 }}
        className={[layout['sticky']].join(' ')}>
        <Header extendsTo={[details['w__wrapper']].join(' ')} type='white' />
      </div>
      <div
        className={[layout['container'], staysDetail['m__content']].join(' ')}>
        <Section
          extendsTo={[staysDetail['flex__panel']].join(' ')}
          type='panel'
        />
        <div className={[details['flex__details']].join(' ')}>
          <div className={[details['w__details--left']].join(' ')}>
            <Section type='characteristics' />
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
          <div className={[details['w__details--right']].join(' ')}>
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
        <>
          {/* <KeepInMind />
          <MoreHomes />
          <ToDoNear />
          <MoreLocations /> */}
        </>
      </div>
      <Footer />
    </>
  );
};

export default id;

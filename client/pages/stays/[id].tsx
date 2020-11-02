import * as React from 'react';

// Containers
// import { Reviews } from '../../components/stays/containers/Reviews';
// import { ToDoNear } from '../../components/stays/containers/ToDoNear';
// import { MoreLocations } from '../../components/stays/containers/MoreLocations';
// import { Amenities } from '../../components/stays/containers/Amenities';
// import { PlaceInfo } from '../../components/stays/containers/PlaceInfo';
// import { StayInfo } from '../../components/stays/containers/StayInfo';
// import { MoreHomes } from '../../components/stays/containers/MoreHomes';
// import { KeepInMind } from '../../components/stays/containers/KeepInMind';
// import { Characteristics } from '../../components/stays/containers/Characteristics';
// import { SleepingArrangements } from '../../components/stays/containers/SleepingArrangements';

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
        className={[details['container'], staysDetail['m__content']].join(' ')}>
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
              type='details'
              extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            />
            <Section type='arrangements' />
            {/* <Amenities /> */}
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

        <>
          {/* <Reviews
            reviews_per_month={data.stay.reviews_per_month}
            number_of_reviews={data.stay.number_of_reviews}
          />
          <HostedBy
            host_name={data.stay.host_name}
            host_description={data.stay.host_description}
            host_since={data.stay.host_since}
            during_stay={data.stay.during_stay}
            host_is_superhost={data.stay.host_is_superhost}
            reviews_per_month={data.stay.reviews_per_month}
            host_picture_url={data.stay.host_picture_url}
            host_thumbnail_url={data.stay.host_thumbnail_url}
            host_response_rate={data.stay.host_response_rate}
            host_response_time={data.stay.host_response_time}
          /> */}
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

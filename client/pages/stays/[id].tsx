import * as React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

// General
// import { ExploreHeader } from '../../components/layout/ExploreHeader';
// import { NewFooter } from '../../components/layout/NewFooter';

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
// import { ImagePanel } from '../../components/stays/functions/ImagePanel';
// import { MainInfo } from '../../components/stays/functions/MainInfo';
// import { CheckInCard } from '../../components/stays/functions/CheckInCard';
// import { HostedBy } from '../../components/stays/functions/HostedBy';

// Images
// const detail2 = require('../../../public/img/high/staydetail2.jpg');
// const detail3 = require('../../../public/img/high/staydetail3.jpg');
// const detail4 = require('../../../public/img/high/staydetail4.jpg');
// const detail5 = require('../../../public/img/high/staydetail5.jpg');
import { Header } from 'components/organisms/header/header.component';
import { MainInfo } from 'components/MainInfo';
import { ImagePanel } from 'components/ImagePanel';
import { Footer } from 'components/organisms/footer/footer.component';

import layout from '../../styles/layout.module.scss';

import staysDetail from '../../styles/staysDetail.module.scss';
import { Section } from 'components/organisms/section/section.component';

const id: () => string | JSX.Element = () => {
  const router = useRouter();

  const changeLength = () => {
    setLength(!length);
  };

  const [length, setLength] = useState<boolean>(false);

  return (
    <>
      <div
        style={{ top: 0, zIndex: 10 }}
        className={[layout['sticky']].join(' ')}>
        <Header type='white' />
      </div>

      <div
        className={[
          staysDetail['p__content'],
          staysDetail['w__content'],
          staysDetail['m__content'],
        ].join(' ')}>
        <div
          className={[staysDetail['w__panel'], staysDetail['flex__panel']].join(
            ' '
          )}>
          <Section type='panel' />
        </div>

        {/* <div className='w-full lg:w-7/12 '>
          {data && (
            <>
              <PlaceInfo data={data} />
              <Characteristics
                host_is_superhost={data.stay.host_is_superhost}
                host_name={data.stay.host_name}
              />
            </>
          )}
          {data && <StayInfo data={data} setLength={changeLength} />}

          <SleepingArrangements />
          <Amenities />
        </div> */}
        {/* {length ? (
          <CheckInCard length={length} loading={loading} />
        ) : (
          <CheckInCard length={length} loading={loading} />
        )} */}

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

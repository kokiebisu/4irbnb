import { Header } from '../../components/organisms/header/header.component';
import React from 'react';
import responsive from '../../styles/responsive.module.scss';
import { Banner } from '../../components/organisms/banner/banner.component';
import space from '../../styles/space.module.scss';

const Homes = () => {
  return (
    <div>
      <div className={[responsive['n_to_b--md']].join(' ')}>
        <Header type='homes' />
      </div>
      <div className={[space['m-v--32']].join(' ')}>
        <Banner type='homes' />
      </div>
    </div>
  );
};

export default Homes;

import React from 'react';
import { Banner } from '../../components/organisms/banner/banner.component';
import { Header } from '../../components/organisms/header/header.component';

const OnlineHost = () => {
  return (
    <div>
      <div>
        <Header type='onlinehost' />
      </div>
      <div>
        <Banner type='onlinehost' />
      </div>
    </div>
  );
};

export default OnlineHost;

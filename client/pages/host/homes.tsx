import { Header } from '../../components/organisms/header/header.component';
import React from 'react';
import responsive from '../../styles/responsive.module.scss';
import { Banner } from '../../components/organisms/banner/banner.component';
import space from '../../styles/space.module.scss';
import color from '../../styles/color.module.scss';
import { Layout } from '../../layout/layout.component';

const Homes = () => {
  return (
    <div>
      <div className={[responsive['n_to_b--md']].join(' ')}>
        <Header type='homes' />
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <Banner type='homes' />
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div>
          <Layout
            type='section'
            sectionType='homes'
            title='Explore how hosting works'>
            yo
          </Layout>
        </div>
        <div>
          <Layout
            type='section'
            sectionType='homes'
            title='From castles to condos, guests book it all'>
            yo
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Homes;

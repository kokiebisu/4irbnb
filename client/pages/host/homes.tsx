import { Header } from '../../components/organisms/header/header.component';
import React from 'react';
import responsive from '../../styles/responsive.module.scss';
import { Banner } from '../../components/organisms/banner/banner.component';
import space from '../../styles/space.module.scss';
import color from '../../styles/color.module.scss';
import { Layout } from '../../layout/layout.component';
import { Section } from '../../components/organisms/section/section.component';
import { Footer } from '../../components/organisms/footer/footer.component';

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
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Section type='all' />
        </div>
      </div>
      <div className={[space['p-v--64']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Section type='priority' />
        </div>
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Section type='help' />
        </div>
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Section type='ready' />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;

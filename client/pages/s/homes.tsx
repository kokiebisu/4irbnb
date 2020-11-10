import { Header } from '../../components/organisms/header/header.component';
import homes from '../../styles/homes.module.scss';
import space from '../../styles/space.module.scss';
import React from 'react';
import layout from '../../styles/layout.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Footer } from '../../components/organisms/footer/footer.component';

const Homes = () => {
  return (
    <div>
      <div style={{ zIndex: 9999, position: 'sticky', top: 0 }}>
        <Header type='white' spread />
      </div>
      <div
        className={[layout['relative'], homes['display__content']].join(' ')}>
        <div className={[space['p--24']].join(' ')}>
          <Section type='homes' />
        </div>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'gray',
            overflow: 'hidden',
            width: 'calc(100% - 840px)',
            height: '100%',
            top: 0,
            bottom: 0,
            right: 0,
            left: 'auto',
          }}>
          map
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homes;

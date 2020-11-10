import { Header } from '../../components/organisms/header/header.component';
import homes from '../../styles/homes.module.scss';
import space from '../../styles/space.module.scss';
import React from 'react';
import layout from '../../styles/layout.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Footer } from '../../components/organisms/footer/footer.component';
import { Bar } from '../../components/organisms/bar/bar.component';
import color from '../../styles/color.module.scss';
import responsive from '../../styles/responsive.module.scss';
import { useRouter } from 'next/router';

const Homes = () => {
  const router = useRouter();
  const { location } = router.query;
  return (
    <div>
      <div style={{ zIndex: 9999, position: 'sticky', top: 0 }}>
        <Header type='white' spread />
      </div>
      <div
        className={[layout['relative'], homes['display__content']].join(' ')}>
        <div className={[homes['w__section']].join(' ')}>
          <div className={[space['p--24']].join(' ')}>
            <div>
              <Section type='homes' location={location} />
            </div>
            <div
              className={[
                space['m-t--16'],
                layout['flex'],
                layout['justify-center'],
              ].join(' ')}>
              <Bar type='paginate' />
            </div>
          </div>
          <div className={[space['p--24'], color['bg--white__1']].join(' ')}>
            <Section type='also' />
          </div>
        </div>
        <div
          className={[responsive['n_to_b--md']].join(' ')}
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

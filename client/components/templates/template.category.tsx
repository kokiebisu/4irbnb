import { Header } from 'components/organisms/header/header.component';
import React from 'react';

import layout from '../../styles/layout.module.scss';
import homes from '../../styles/homes.module.scss';
import space from '../../styles/space.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import responsive from '../../styles/responsive.module.scss';
import { Bar } from '../../components/organisms/bar/bar.component';
import { Footer } from '../../components/organisms/footer/footer.component';
import { CategoryTemplateProps } from './props';

export const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  stayType,
}) => {
  return (
    <div>
      <div style={{ zIndex: 9999, position: 'sticky', top: 0 }}>
        <Header type='white' spread />
      </div>
      <div
        className={[layout['relative'], homes['display__content']].join(' ')}>
        <div className={[homes['w__section']].join(' ')}>
          <div className={[space['p--24']].join(' ')}>
            <div>content</div>
            <div>
              <Section
                type='also'
                title='Other popular destinations'
                columns={3}
              />
            </div>
            <div>
              <Section type='homes' layout='vertical' location={location} />
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

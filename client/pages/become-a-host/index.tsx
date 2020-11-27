import { Create } from 'components/organisms/create/create.component';
import React from 'react';

import responsive from '../../styles/responsive.module.scss';
import layout from '../../styles/layout.module.scss';

const BecomeAHostPage = () => {
  return (
    <div
      style={{ height: '100vh' }}
      className={[
        layout['container'],
        layout['flex'],
        layout['items-center'],
      ].join(' ')}>
      <div
        className={[responsive['b_to_f--sm'], layout['items-center']].join(
          ' '
        )}>
        <div
          style={{ paddingRight: 60 }}
          className={[responsive['w55p_to_100--sm']].join(' ')}>
          <div
            style={{
              margin: '50px auto 0',
              maxWidth: 400,
              width: '100%',
            }}>
            <Create type='getstarted' />
          </div>
        </div>
        <div
          className={[responsive['n_to_b--sm']].join(' ')}
          style={{ width: '50%', paddingLeft: 40 }}>
          <div>
            <img
              style={{ objectFit: 'cover', width: '100%' }}
              src='https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAHostPage;

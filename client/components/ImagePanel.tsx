import * as React from 'react';
import { useState } from 'react';
import layout from '../styles/layout.module.scss';
import staysDetail from '../styles/staysDetail.module.scss';

export const ImagePanel: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className={[layout['justify-content']].join(' ')}>
        <div>
          <div className={[layout['flex']].join(' ')} style={{ height: '50%' }}>
            <div
              style={{
                backgroundPosition: 'cover',
                borderRight: '4px solid white',
                position: 'relative',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
                borderRadius: 5,
              }}
              className={[staysDetail['w__image']].join(' ')}>
              <img
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
            <div
              className={[staysDetail['hidden__panel']].join(' ')}
              style={{ position: 'relative', width: '50%' }}>
              <div
                style={{ width: '100%', height: '100%' }}
                className={[layout['flex'], layout['flex-wrap']].join(' ')}>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderRight: '4px solid white',
                    borderBottom: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',

                    borderBottom: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderTop: '4px solid white',
                    borderRight: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderTop: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

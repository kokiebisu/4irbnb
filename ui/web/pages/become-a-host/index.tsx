import { Header, $HEADER } from '@nextbnb/organisms';
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype';

import responsive from '@styles/responsive.module.scss';
import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';

import { useTabTitle } from '@nextbnb/design/hooks/useTabTitle';
import { useEffect } from 'react';
import { useStayDispatch } from '@context/stay';

const BecomeAHostPage = () => {
  const dispatchStay = useStayDispatch();
  useTabTitle(
    'Become a Host and Rent Out Your Room, House or Apartment on Airbnb'
  );

  useEffect(() => {
    dispatchStay({
      type: 'reset',
      payload: { place: 'Entire place', guests: 0, address: '' },
    });
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ zIndex: 60, height: 65 }}>
        <div className={[responsive['b_to_n--sm']].join(' ')}>
          <Header variant={$HEADER.stay} />
        </div>
      </div>
      <div className={[space['m-t--6'], layout['container']].join(' ')}>
        <div className={[responsive['b_to_f--sm']].join(' ')}>
          <div
            style={{ paddingRight: 60, marginTop: 60 }}
            className={[responsive['w100p_to_55p--sm']].join(' ')}
          >
            <div
              style={{
                margin: '50px auto 0',
                maxWidth: 400,
                width: '100%',
              }}
            >
              <Prototype variant={$PROTOTYPE.getstarted} />
            </div>
          </div>
          <div
            className={[responsive['n_to_b--sm']].join(' ')}
            style={{ width: '50%', paddingLeft: 40 }}
          >
            <div>
              <img
                style={{ objectFit: 'cover', width: '100%' }}
                src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAHostPage;

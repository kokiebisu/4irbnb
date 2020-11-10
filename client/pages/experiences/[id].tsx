import React from 'react';
import { Header } from 'components/organisms/header/header.component';
import { Section } from 'components/organisms/section/section.component';
import layout from '../../styles/layout.module.scss';
import details from '../../styles/details.module.scss';
import color from '../../styles/color.module.scss';
import space from '../../styles/space.module.scss';
import shape from '../../styles/shape.module.scss';
import staysDetail from '../../styles/staysDetail.module.scss';
import { Card } from '../../components/atoms/card/card.component';
import { Modal } from '../../components/organisms/modal/modal.component';
import { Footer } from '../../components/organisms/footer/footer.component';

const id: () => string | JSX.Element = () => {
  return (
    <>
      <div>
        <Header extendsTo={[details['w__wrapper']].join(' ')} type='white' />
      </div>
      <div className={[].join(' ')}>
        <Section
          extendsTo={[staysDetail['flex__panel']].join(' ')}
          type='panel'
        />
      </div>
      <div
        className={[layout['container'], staysDetail['m__content']].join(' ')}>
        <div className={[details['flex__details']].join(' ')}>
          <div className={[details['w__details--left']].join(' ')}>
            <div className={[staysDetail['b__characteristics']].join(' ')}>
              <Section
                layoutType='experience'
                type='characteristics'
                characteristics={['time', 'devices', 'people', 'language']}
              />
            </div>
            <div
              className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
              <Section layoutType='experience' type='description' />
            </div>
            <div
              className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
              <Section type='participate' />
            </div>
            <div
              className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
              <Section type='bring' />
            </div>
          </div>
          <div
            style={{ paddingBottom: 56 }}
            className={[details['w__details--right']].join(' ')}>
            <Card
              type='checkin'
              extendsTo={[
                layout['flex'],
                layout['justify-end'],
                layout['sticky'],
                layout['t--78'],
              ].join(' ')}
            />
          </div>
        </div>
        <Section
          layoutType='experience'
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='host'
        />
        <Section
          layoutType='experience'
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='reviews'
        />
        <Section
          layoutType='experience'
          extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
          type='know'
        />
      </div>
      <Footer />
      <div
        className={[
          staysDetail['display__availability'],
          shape['w--full'],
        ].join(' ')}
        style={{ position: 'fixed', bottom: 0, zIndex: 9999 }}>
        <Modal type='availability' />
      </div>
    </>
  );
};

export default id;

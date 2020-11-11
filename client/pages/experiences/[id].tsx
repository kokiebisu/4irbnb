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
import { useToggleState } from 'context/toggle';

const id: () => string | JSX.Element = () => {
  const toggleState = useToggleState();
  return (
    <>
      <div>
        <div style={{ position: 'relative', zIndex: 9000 }}>
          <Header type='white' />
        </div>
        <div className={[].join(' ')}>
          <Section
            extendsTo={[staysDetail['flex__panel']].join(' ')}
            type='panel'
          />
        </div>
        <div
          className={[layout['container'], staysDetail['m__content']].join(
            ' '
          )}>
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
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section layoutType='experience' type='description' />
              </div>
              <div
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section type='participate' />
              </div>
              <div
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section type='bring' />
              </div>
            </div>
            <div
              style={{ padding: 20, paddingBottom: 56 }}
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
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='host' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section type='experiences' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='reviews' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='available' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='know' />
          </div>
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
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 9999,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <Modal
            extendsTo={[
              layout['flex'],
              layout['justify-center'],
              layout['items-center'],
              shape['h--100v'],
            ].join(' ')}
            type='auth'
          />
        </div>
      )}
    </>
  );
};

export default id;

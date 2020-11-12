import React, { useLayoutEffect, useRef, useState } from 'react';
import layout from '../../../styles/layout.module.scss';
import { HomesBannerProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import { Button } from '../../../components/atoms/button/button.component';
import { Card } from '../../../components/atoms/card/card.component';
import banner from './banner.module.scss';
import responsive from '../../../styles/responsive.module.scss';

export const HomesBanner: React.FC<HomesBannerProps> = ({
  hosts = [
    { host: 'Darrel', stayType: 'tiny house', location: 'Atlanta' },
    { host: 'Darrel', stayType: 'tiny house', location: 'Atlanta' },
    { host: 'Darrel', stayType: 'tiny house', location: 'Atlanta' },
    { host: 'Darrel', stayType: 'tiny house', location: 'Atlanta' },
  ],
}) => {
  const sliderWrapper = useRef(null);

  const width = 366;
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const containerRef = useRef<HTMLDivElement>();

  const previousSlide = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (hosts.length - 1) * width,
        activeSlide: hosts.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const nextSlide = () => {
    if (state.activeSlide === hosts.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div
      className={[responsive['b_to_f--sm'], layout['items-center']].join(' ')}>
      <div
        style={{ position: 'relative', zIndex: 500 }}
        className={[banner['w__homes--left']].join(' ')}>
        <div className={`${[space['p-l--64']].join(' ')} `}>
          <div
            style={{ maxWidth: 360, width: '100%' }}
            className={`${[
              layout['flex'],
              layout['flex-col'],
              layout['justify-center'],
            ].join(' ')} `}>
            <div className={[space['m-b--32']].join(' ')}>
              <h1
                style={{ lineHeight: 1 }}
                className={[font['size--45']].join(' ')}>
                Host your home on Airbnb
              </h1>
            </div>
            <div className={[space['m-b--32']].join(' ')}>
              <h4 className={[font['size--18'], font['lh--15']].join(' ')}>
                Join a vibrant community of hosts, create memorable experiences
                for travellers, and earn money to pursue the things you love.
              </h4>
            </div>
            <div className={[layout['inline-block']].join(' ')}>
              <Button type='primary' size='md' title='Get started' />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ position: 'relative', zIndex: 500 }}
        className={[banner['w__homes--right']].join(' ')}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 12,
            zIndex: 500,
          }}>
          <div
            style={{
              borderRadius: 12,
              transform: `translateX(-${state.translate}px)`,
              transition: `transform ease-out ${state.transition}s`,
              height: '100%',
              width: width * hosts.length,
              display: 'flex',
            }}>
            {hosts.map((host, index) => {
              return (
                <div
                  ref={sliderWrapper}
                  className={[space['m-r--16']].join(' ')}>
                  <Card
                    type='host'
                    key={index}
                    host='Darrel'
                    stayType='tiny house'
                    location='Atlanta'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={[
            space['m-t--16'],
            layout['flex'],
            layout['justify-end'],
          ].join(' ')}>
          <div className={[layout['items-center'], layout['flex']].join(' ')}>
            <div className={[space['m-r--8']].join(' ')}>
              <Button
                type='paginate'
                direction='left'
                onPress={previousSlide}
              />
            </div>
            <div>
              <Button type='paginate' direction='right' onPress={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

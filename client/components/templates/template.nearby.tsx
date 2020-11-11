import React from 'react';

import layout from '../../styles/layout.module.scss';
import homes from '../../styles/homes.module.scss';
import space from '../../styles/space.module.scss';
import color from '../../styles/color.module.scss';
import responsive from '../../styles/responsive.module.scss';
import font from '../../styles/font.module.scss';
import shape from '../../styles/shape.module.scss';

import { Header } from '../../components/organisms/header/header.component';
import { Section } from '../../components/organisms/section/section.component';
import { Bar } from '../../components/organisms/bar/bar.component';
import { Footer } from '../../components/organisms/footer/footer.component';
import { NearbyTemplateProps } from './props';
import { Button } from '../../components/atoms/button/button.component';

export const NearbyTemplate: React.FC<NearbyTemplateProps> = ({
  city,
  filterCount = 1,
  guests = 8000,
  average = 4.9,
  filters = [
    { name: 'Cancellation flexibility' },
    { name: 'Type of place' },
    { name: 'Price' },
    { name: 'Instant Book' },
    { name: 'More filters' },
  ],
}) => {
  const displayPlace = city.match(/_/g) ? city.split('_').join(' ') : city;

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
              <p className={[font['size--14']].join(' ')}>300+ stays</p>
            </div>
            <div>
              <h3 className={[font['size--32']].join(' ')}>
                Stays in{' '}
                <span
                  className={[font['weight--500']].join(' ')}
                  style={{ textTransform: 'capitalize' }}>
                  {displayPlace}
                </span>
              </h3>
            </div>
            <div className={[space['m-v--22']].join(' ')}>
              <div className={[shape['from__md--flex']].join(' ')}>
                {filters.map((filter, index) => {
                  return (
                    <div key={index} className={[space['m-r--8']].join(' ')}>
                      <Button type='filter' name={filter.name} />
                    </div>
                  );
                })}
              </div>
              <div className={[shape['only__sm']].join(' ')}>
                <Button type='filter' name={`filters ${filterCount}`} />
              </div>
            </div>
            {city && (
              <div>
                <div className={[space['m-b--16']].join(' ')}>
                  <p
                    className={[color['c--gray__1'], font['size--14']].join(
                      ' '
                    )}>
                    Enter dates and number of guests to see the total price per
                    night.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: 'lightgray',
                    height: 1,
                    width: '100%',
                  }}
                />
                <div
                  className={[layout['flex'], layout['items-center']].join(
                    ' '
                  )}>
                  <div
                    className={[
                      space['m-r--12'],
                      space['p-v--8'],
                      space['m-v--8'],
                    ].join(' ')}>
                    <img
                      src='https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif'
                      style={{ width: 40 }}
                    />
                  </div>
                  <div>
                    <h3 className={[font['size--14']].join(' ')}>
                      More than {guests} guests have stayed in{' '}
                      <span
                        className={[font['weight--500']].join(' ')}
                        style={{ textTransform: 'capitalize' }}>
                        {displayPlace}
                      </span>
                      . On average they rated their stays {average} out of 5
                      stars.
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <div>
              <Section type='homes' />
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

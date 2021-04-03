import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';

import font from '@styles/font.module.scss';
import shape from '@styles/shape.module.scss';

import { Template } from 'components/segments/s/homes';
import { Bar, $Bar } from '@bar';

import { Button, $Button } from '@button';

/**
 * Renders the nearby template component
 * @param param0 Prop
 */
export const NearbyPrototype: React.FC<{
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}> = ({
  city = 'location',
  filterCount = 1,
  guests = 1000,
  average = 5.0,
  filters = [
    { name: 'Filter' },
    { name: 'Filter' },
    { name: 'Filter' },
    { name: 'Filter' },
    { name: 'Filter' },
  ],
}) => {
  const displayPlace = city.match(/_/g) ? city.split('_').join(' ') : city;

  return (
    <div className={[layout['relative']].join(' ')}>
      <div className={[space['p--24']].join(' ')}>
        <div>
          <p className={[font['size--14']].join(' ')}>300+ stays</p>
        </div>
        <div>
          <h3 className={[font['size--32']].join(' ')}>
            Stays in{' '}
            <span
              className={[font['weight--500']].join(' ')}
              style={{ textTransform: 'capitalize' }}
            >
              {displayPlace}
            </span>
          </h3>
        </div>
        <div className={[space['m-v--22']].join(' ')}>
          <div className={[shape['from__md--flex']].join(' ')}>
            {filters.map((filter, index) => {
              return (
                <div key={index} className={[space['m-r--8']].join(' ')}>
                  <Button variant={$Button.FILTER} name={filter.name} />
                </div>
              );
            })}
          </div>
          <div className={[shape['only__sm']].join(' ')}>
            <Button variant={$Button.FILTER} name={`filters ${filterCount}`} />
          </div>
        </div>
        {city && (
          <div>
            <div className={[space['m-b--16']].join(' ')}>
              <p className={[color['c--gray__1'], font['size--14']].join(' ')}>
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
            <div className={[layout['flex'], layout['items-center']].join(' ')}>
              <div
                className={[
                  space['m-r--12'],
                  space['p-v--8'],
                  space['m-v--8'],
                ].join(' ')}
              >
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
                  style={{ width: 40 }}
                />
              </div>
              <div>
                <h3 className={[font['size--14']].join(' ')}>
                  More than {guests} guests have stayed in{' '}
                  <span
                    className={[font['weight--500']].join(' ')}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {displayPlace}
                  </span>
                  . On average they rated their stays {average} out of 5 stars.
                </h3>
              </div>
            </div>
          </div>
        )}
        <div>
          <Template variant="homes" />
        </div>
        <div
          className={[
            space['m-t--16'],
            layout['flex'],
            layout['justify-center'],
          ].join(' ')}
        >
          <Bar variant={$Bar.PAGINATE} animate />
        </div>
      </div>
      <div className={[space['p--24'], color['bg--white__1']].join(' ')}>
        <Template variant="also" />
      </div>
    </div>
  );
};

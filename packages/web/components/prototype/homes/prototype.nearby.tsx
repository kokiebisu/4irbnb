import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';

import font from '@styles/font.module.scss';
import shape from '@styles/shape.module.scss';

import { Segment } from '@template/s/homes';
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
    <div className="relative">
      <div className="p-4">
        <div>
          <p className="text-sm">300+ stays</p>
        </div>
        <div>
          <h3 className="text-3xl">
            Stays in{' '}
            <span className="font-medium capitalize">{displayPlace}</span>
          </h3>
        </div>
        <div className="my-4">
          <div className="md:flex">
            {filters.map((filter, index) => {
              return (
                <div key={index} className={[space['m-r--8']].join(' ')}>
                  <Button variant={$Button.FILTER} name={filter.name} />
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            <Button variant={$Button.FILTER} name={`filters ${filterCount}`} />
          </div>
        </div>
        {city && (
          <div>
            <div className="mb-4">
              <p className="text-gray-6700 text-sm">
                Review COVID-19 travel restrictions before you book.
              </p>
            </div>
            <div style={{ height: 1 }} className="bg-gray-400 w-full" />
            {/* <div className="flex items-center">
              <div className="mr-3 py-3 my-3">
                <img
                  src="https://a0.muscache.com/nextbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
                  className="w-12"
                />
              </div>
              <div>
                <h3 className={[font['size--14']].join(' ')}>
                  Review COVID-19 travel restrictions before you book.
                  <span
                    className={[font['weight--500']].join(' ')}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {displayPlace}
                  </span>
                  . On average they rated their stays {average} out of 5 stars.
                </h3>
              </div>
            </div> */}
          </div>
        )}
        <div>
          <Segment variant="homes" />
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
        <Segment variant="also" />
      </div>
    </div>
  );
};

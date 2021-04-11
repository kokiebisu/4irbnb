import { Segment } from '@template/s/homes';
import { Bar, $Bar } from '@bar';
import { Button } from '@button';

export interface NearbyPrototypeProps {
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}

/**
 * Renders the nearby template component
 * @param param0 Prop
 */
export const NearbyPrototype: React.FC<NearbyPrototypeProps> = ({
  city,
  filterCount,
  guests,
  average,
  filters,
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
                <div key={index} className="mr-3">
                  <Button variant="filter" label={filter.name} />
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            <Button variant="filter" name={`filters ${filterCount}`} />
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
        <div className="mt-4 flex justify-center">
          <Bar variant={$Bar.PAGINATE} animate />
        </div>
      </div>
      <div className="p-5 bg-gray-300">
        <Segment variant="also" />
      </div>
    </div>
  );
};

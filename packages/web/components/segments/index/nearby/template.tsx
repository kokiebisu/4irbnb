import { Card, $Card } from '@card';

export interface NearbyTemplateProps {
  items?: { to: string; imgUrl: string; city: string; hours: number }[];
}

/**
 * Renders the nearby section
 * @param {Object[]} items - List of cities which are nearby
 */
export const NearbyTemplate: React.FC<NearbyTemplateProps> = ({ items }) => {
  return (
    <div className="grid overflow-x-auto grid-col-4 snap-type-x">
      {items.map((item, index) => {
        return (
          <div key={index} className="w-half-screen md:w-auto snap-align-start">
            <div className="mb-3">
              <Card
                variant={$Card.NEARBY}
                to={item[0]?.to}
                imgUrl={item[0]?.imgUrl}
                city={item[0]?.city}
                hours={item[0]?.hours}
                size="sm"
              />
            </div>
            <div className="">
              <Card
                variant={$Card.NEARBY}
                to={item[1]?.to}
                imgUrl={item[1]?.imgUrl}
                city={item[1]?.city}
                hours={item[1]?.hours}
                size="sm"
              />
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

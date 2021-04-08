import space from '@styles/space.module.scss';
import template from '@template/index/index.module.scss';

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
    <div
      className="grid overflow-x-auto"
      style={{
        gridTemplateColumns: `repeat(4, 1fr)`,
        scrollSnapType: 'x mandatory',
      }}
    >
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="w-half-screen md:w-auto"
            style={{ scrollSnapAlign: 'start' }}
          >
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

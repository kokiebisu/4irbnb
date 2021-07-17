import { Card } from "@card";

export interface NearbySegmentTemplateProps {
  items: { to: string; imgUrl: string; city: string; hours: number }[];
}

/**
 * Renders the nearby section
 * @param {Object[]} items - List of cities which are nearby
 */
export const NearbySegmentTemplate: React.FC<NearbySegmentTemplateProps> = ({
  items,
}) => {
  return (
    <div className="grid overflow-x-auto grid-cols-4 snap-type-x">
      {items.map((item, index) => {
        return (
          <div key={index} className="w-half-screen md:w-auto snap-align-start">
            <div className="mb-3">
              <Card
                variant="nearby"
                // to={items[0]?.to}
                imgUrl={item[0]?.imgUrl}
                city={item[0]?.city}
                hours={item[0]?.hours}
                size="lg"
              />
            </div>
            <div className="">
              <Card
                variant="nearby"
                // to={items[1]?.to}
                imgUrl={item[1]?.imgUrl}
                city={item[1]?.city}
                hours={item[1]?.hours}
                size="lg"
              />
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

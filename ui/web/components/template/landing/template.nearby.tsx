/** styles */
import space from "@styles/space.module.scss";
import template from "@template/landing/index.module.scss";

/** components */
import { Card } from "@card/card.component";

/** helpers */
import { groupByTwo } from "@helper/array";

/** contents */
import { nearbyPic } from "@content";

/**
 * Renders the nearby section
 * @param {string[]} items - List of cities which are nearby
 */
export const NearbyTemplate: React.FC<{
  items?: string[];
}> = ({
  items = [
    "city1",
    "city2",
    "city3",
    "city4",
    "city5",
    "city6",
    "city7",
    "city8",
  ],
}) => {
  const displayingItems = groupByTwo(items);
  return (
    <div>
      <div className={[space["p-h--70"]].join(" ")}>
        <div
          style={{ gridTemplateColumns: `repeat(4, 1fr)` }}
          className={[template["category__carousel"]].join(" ")}
        >
          {displayingItems.map((item, index) => {
            return (
              <div key={index} className={[template["w__nearby"]].join(" ")}>
                <div className={[space["m-b--10"]].join(" ")}>
                  <Card
                    variant="nearby"
                    to={item[0] && item[0].to}
                    imgUrl={nearbyPic[index]}
                    city={item[0].city}
                    hours={item[0].hours}
                    size="sm"
                  />
                </div>
                <div>
                  <Card
                    variant="nearby"
                    to={item[1] && item[1].to}
                    imgUrl={nearbyPic[index + 4]}
                    city={item[1].city}
                    hours={item[1].hours}
                    size="sm"
                  />
                </div>
              </div>
            );
          })}
          <div className={template["nearby__space"]}></div>
        </div>
      </div>
    </div>
  );
};

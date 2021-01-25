import space from "@styles/space.module.scss";
import template from "@template/index/index.module.scss";

import { Card } from "@card";

import { groupByTwo } from "@helper/array";
import * as $card from "@card/variants";

/**
 * Renders the nearby section
 * @param {string[]} items - List of cities which are nearby
 */
export const NearbyTemplate: React.FC<{
  items?: string[];
}> = ({
  items = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
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
                    variant={$card.NEARBY}
                    to={item[0]?.to}
                    imgUrl={item[0]?.imgUrl}
                    city={item[0]?.city}
                    hours={item[0]?.hours}
                    size="sm"
                  />
                </div>
                <div>
                  <Card
                    variant={$card.NEARBY}
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
          <div className={template["nearby__space"]}></div>
        </div>
      </div>
    </div>
  );
};

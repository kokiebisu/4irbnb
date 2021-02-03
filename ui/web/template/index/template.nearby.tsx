/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, $Card } from "@airbnb/components/web";
import { groupByTwo } from "@airbnb/components/helper/array";

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
      <div
        css={{
          padding: "0 70px",
        }}
      >
        <div
          css={{ gridTemplateColumns: `repeat(4, 1fr)` }}
          // className={[template["category__carousel"]].join(" ")}
        >
          {displayingItems.map((item, index) => {
            return (
              <div
                key={index}
                //  className={[template["w__nearby"]].join(" ")}
              >
                <div
                  css={{
                    marginBottom: 10,
                  }}
                >
                  <Card
                    variant={$Card.NEARBY}
                    to={item[0]?.to}
                    imgUrl={item[0]?.imgUrl}
                    city={item[0]?.city}
                    hours={item[0]?.hours}
                    size="sm"
                  />
                </div>
                <div>
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
          <div className={template["nearby__space"]}></div>
        </div>
      </div>
    </div>
  );
};

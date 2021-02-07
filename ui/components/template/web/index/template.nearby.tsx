/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, $Card } from "../../../molecules/card/web";
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
          gridTemplateColumns: `repeat(4, 1fr)`,
          display: "grid",
          gridAutoFlow: "column",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          columnGap: 14,
          rowGap: 14,
          scrollPadding: "0 24px",
          "::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
          },
        }}
        sx={{
          margin: ["0 -24px", "0 -24px", "0"],
          padding: ["4px 28px 4px", "4px 28px 4px", "4px 0"],
          width: ["auto", "auto", "100%"],
        }}
      >
        {displayingItems.map((item, index) => {
          return (
            <div
              key={index}
              sx={{
                width: ["100vw", "auto", "auto"],
              }}
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
        <div
          css={{
            height: "100%",
            width: [250, 0, 0],
          }}
        ></div>
      </div>
    </div>
  );
};

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, $Card } from "@card/web";

/**
 * Renders the arrangement section
 * @param {string} title - Title of the section
 * @param {Object[]} arrangements - List of amenities
 */
export const ArrangementsTemplate: React.FC<{
  title?: string;
  arrangements?: { type: string; beds: { type: string; count: number }[] }[];
}> = ({
  title = "Title here",
  arrangements = [
    {
      type: "Bedroom",
      beds: [{ type: "double bed", count: 1 }],
    },
    {
      type: "Bedroom",
      beds: [{ type: "double bed", count: 1 }],
    },
  ],
}) => {
  return (
    <div>
      <div>
        <h3
          css={{
            fontWeight: 500,
            marginBottom: 20,
            color: "gray__3",
            fontSize: 24,
          }}
        >
          {title}
        </h3>
      </div>
      <div css={{ marginLeft: -8, marginRight: -8 }}>
        <div
          css={{
            display: "flex",
            margin: "0 8px",
          }}
        >
          {arrangements.map((arrangement, index) => {
            return (
              <div key={index} style={{ marginRight: 12 }}>
                <Card variant={$Card.ARRANGEMENTS} card={arrangement} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/** components */
import { Card } from "@card";

/** styles */
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

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
          className={[
            font["weight--500"],
            space["m-b--20"],
            color["c--gray__3"],
            font["size--24"],
          ].join(" ")}
        >
          {title}
        </h3>
      </div>
      <div style={{ marginLeft: -8, marginRight: -8 }}>
        <div
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          className={[layout["flex"]].join(" ")}
        >
          {arrangements.map((arrangement, index) => {
            return (
              <div key={index} style={{ marginRight: 12 }}>
                <Card variant="arrangements" card={arrangement} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

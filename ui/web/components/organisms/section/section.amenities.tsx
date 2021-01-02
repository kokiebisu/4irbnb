/** components */
import { Bullet } from "@bullet";
import { Button } from "@button";

/** styles **/
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import section from "@section/section.module.scss";

/** stories */
import { Border } from "@button/button.stories";

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitySection: React.FC<{
  title?: string;
  amenities?: string[];
}> = ({ title = "Title here", amenities = ["kitchen", "smoke"] }) => {
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
      <div
        className={[
          section["display__amenities--wrapper"],
          space["m-b--32"],
        ].join(" ")}
      >
        {amenities.map((amenity, index) => {
          return <Bullet key={index} variant="amenity" amenityType={amenity} />;
        })}
      </div>
      <div
        style={{ width: 300 }}
        className={[space["m-t--14"], space["m-b--14"]].join(" ")}
      >
        <Button {...Border.args} size="md" title="Show all 40 amenities" />
      </div>
    </div>
  );
};

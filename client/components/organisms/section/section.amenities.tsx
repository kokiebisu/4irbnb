import React from "react";

/** Components */
import { Bullet } from "../../atoms/bullet/bullet.component";
import { Button } from "../../atoms/button/button.component";

/** Styles */
import font from "../../../styles/font.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";
import section from "./section.module.scss";

/** Props */
import { AmenitySectionProps } from "./props";

/** Stories */
import { border } from "../../../components/atoms/button/button.stories";

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitySection: React.FC<AmenitySectionProps> = ({
  title = "Title here",
  amenities = [{ amenityType: "kitchen" }, { amenityType: "smoke" }],
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
      <div
        className={[
          section["display__amenities--wrapper"],
          space["m-b--32"],
        ].join(" ")}
      >
        {amenities.map((amenity, index) => {
          return (
            <Bullet
              key={index}
              type="amenity"
              amenityType={amenity.amenityType}
            />
          );
        })}
      </div>
      <div
        style={{ width: 300 }}
        className={[space["m-t--14"], space["m-b--14"]].join(" ")}
      >
        <Button {...border.args} size="md" title="Show all 40 amenities" />
      </div>
    </div>
  );
};

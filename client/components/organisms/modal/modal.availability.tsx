import React from "react";

/** components */
import { Button } from "../../../components/atoms/button/button.component";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

/** vectors */
import { Star } from "../../../public/svg/original";

/** stories */
import { primary } from "../../../components/atoms/button/button.stories";

/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */
export const AvailabilityModal: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 4.99, reviews = 271 }) => {
  return (
    <div
      className={[
        layout["items-center"],
        layout["justify-between"],
        layout["flex"],
        color["b-t--white__2"],
        space["p--16"],
        color["bg--white"],
      ].join(" ")}
    >
      <div>
        <p>Add dates for prices</p>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div>
            <Star width={12} />
          </div>
          <div>
            <span
              className={[
                layout["inline-block"],
                font["size--12"],
                space["m-l--4"],
              ].join(" ")}
            >
              {ratings}
            </span>
            <span
              className={[
                layout["inline-block"],
                font["size--12"],
                color["c--white__3"],
                space["m-l--4"],
              ].join(" ")}
            >
              ({reviews})
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button {...primary.args} title="Check availability" />
      </div>
    </div>
  );
};

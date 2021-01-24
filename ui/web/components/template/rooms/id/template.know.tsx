import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

import { Bullet } from "@bullet";

import * as $bullet from "@bullet/variants";

/**
 * Renders the know section
 * @param {string[]} houseRules - List of rules the users must follow
 * @param {string[]} healths - List of health guidelines
 * @param {string} layoutType - The type of layout
 */
export const KnowTemplate: React.FC<{
  houseRules?: string[];
  healths?: string[];
  layoutType?: string;
}> = ({
  houseRules = [
    "checkin",
    "checkout",
    "self",
    "children",
    "smoking",
    "pets",
    "parties",
  ],
  healths = ["cleaning", "distancing", "caution", "check"],
  layoutType = "room",
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
          Things to know
        </h3>
      </div>
      <div
        style={{
          display: "flex",
        }}
        className={[].join(" ")}
      >
        <div>
          <div className={[space["m-b--16"]].join(" ")}>
            <h3>House rules</h3>
          </div>
          <div className={[space["m-b--32"]].join(" ")}>
            {houseRules.map((item, index) => {
              return (
                <div key={index} className={[space["m-b--6"]].join(" ")}>
                  <Bullet variant={$bullet.KNOW} categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>

        <div>
          <div className={[space["m-b--16"]].join(" ")}>
            <h3>Health & safety</h3>
          </div>
          <div className={[space["m-b--32"]].join(" ")}>
            {healths.map((item, index) => {
              return (
                <div key={index} className={[space["m-b--6"]].join(" ")}>
                  <Bullet variant={$bullet.KNOW} categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>
        <div>
          <div className={[space["m-b--16"]].join(" ")}>
            <h3>Cancellation policy</h3>
          </div>
          <div className={[space["m-b--32"]].join(" ")}>
            <p className={[font["weight--100"]].join(" ")}>
              Add your trip to get the cancellation details for this stay.
            </p>
          </div>
          <div>
            <u>Add dates</u>
          </div>
        </div>
      </div>
    </div>
  );
};

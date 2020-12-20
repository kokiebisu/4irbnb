import React from "react";

/** props */
import { BringSectionProps } from "./props";

/** styles */
import font from "../../../styles/font.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";

/** components */
import { Bullet } from "../../../components/atoms/bullet/bullet.component";

/**
 * Renders the 'What to bring' section
 * @param {Object[]} necessities - List of things the users have to bring
 */
export const BringSection: React.FC<BringSectionProps> = ({
  necessities = [
    "All purpose flour 100g",
    "water 50g",
    "160g minced pork(40%fat),can be subbed with chicken, shrimp.If your meat is too much lean, keep the fat cut off from skin(the skin for making pork jelly)",
    "80g pork skin jelly, can be sunned with chicken feet, gelatin with stock. (Will give you instructions and video how to make it",
    "Chopped very fine ginger and spring onions 3g each.",
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
          What to bring
        </h3>
      </div>
      <div className={[space["m-b--32"]].join(" ")}>
        {necessities.map((necessity, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Bullet variant="bring" title={necessity} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

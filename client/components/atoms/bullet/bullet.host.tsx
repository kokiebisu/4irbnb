import React from "react";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";

/** vectors */
import { Star, Superhost, Verified } from "../../../public/svg/original";

/** props */
import { HostBulletProps } from "./props";

/**
 * Renders the host bullet
 * @param {string} categoryType - Type of host bullet
 * @param {number} total - Number of reviews
 */
export const HostBullet: React.FC<HostBulletProps> = ({
  categoryType = "review",
  total = 100,
}) => {
  const categories = {
    review: { icon: <Star width={16} />, description: `${total} Reviews` },
    verified: {
      icon: <Verified width={16} />,
      description: "Identity verified",
    },
    superhost: { icon: <Superhost width={16} />, description: "Superhost" },
  };
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        space["m-r--18"],
      ].join(" ")}
    >
      <div className={[space["m-r--8"]].join(" ")}>
        {categories[categoryType].icon}
      </div>
      <p className={[font["weight--100"]].join(" ")}>
        {categories[categoryType].description}
      </p>
    </div>
  );
};

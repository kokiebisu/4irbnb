import React from "react";

/** vectors */
import { Activities, Computer, Host } from "../../../public/svg/original";

/** props */
import { ExperienceBulletProps } from "./props";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import space from "../../../styles/space.module.scss";

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
export const ExperienceBullet: React.FC<ExperienceBulletProps> = ({
  experience = "hosts",
}) => {
  const experiences = {
    hosts: {
      icon: <Host width={36} />,
      title: "Thoughtful hosts",
      description:
        "Get to know hosts who share their expertise and a window to their world.",
    },
    activities: {
      icon: <Activities width={36} />,
      title: "Small group activities",
      description:
        "Meet people from all over the world while learning something new together.",
    },
    global: {
      icon: <Computer width={36} />,
      title: "Simple and global",
      description:
        "Join easily and participate from home without a lot of prep.",
    },
  };

  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div className={[space["m-r--16"]].join(" ")}>
        {experiences[experience].icon}
      </div>
      <div>
        <div>
          <h3 className={[font["size--16"]].join(" ")}>
            {experiences[experience].title}
          </h3>
        </div>
        <div>
          <p className={[font["size--14"]].join(" ")}>
            {experiences[experience].description}
          </p>
        </div>
      </div>
    </div>
  );
};

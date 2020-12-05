import React from "react";

/** styles */
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import animation from "../../../styles/animation.module.scss";

/** props */
import { HostButtonProps } from "./props";

/**
 * Renders the host button component
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const HostButton: React.FC<HostButtonProps> = ({ inverse = false }) => {
  return (
    <div
      className={`${[
        shape["br--30"],
        layout["inline-block"],
        space["p-t--13"],
        space["p-b--13"],
        space["p-l--13"],
        space["p-r--13"],
      ].join(" ")} ${
        inverse
          ? [
              font["weight--300"],
              animation["hover-background--white__transparent"],
            ].join(" ")
          : [font["weight--500"], animation["hover-background--white__1"]].join(
              " "
            )
      }`}
    >
      <h4
        className={`${[font["size--14"]].join(" ")} ${
          inverse ? color["c--white"] : color["c--gray__4"]
        }`}
      >
        Become a host
      </h4>
    </div>
  );
};

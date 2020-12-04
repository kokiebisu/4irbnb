import React from "react";

/** Styles */
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import animation from "../../../styles/animation.module.scss";

/** Props */
import { OptionButtonProps } from "./props";

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
export const OptionButton: React.FC<OptionButtonProps> = ({
  name = "Option",
  bold = false,
}) => {
  return (
    <div
      className={`${[
        font["text--left"],
        font["size--13"],
        color["bg--white__0"],
        space["p-h--14"],
        space["p-v--10"],
        layout["block"],
        animation["hover-background--white__1"],
      ].join(" ")} ${
        bold ? [font["weight--500"]].join(" ") : [font["weight--300"]].join(" ")
      }`}
    >
      {name}
    </div>
  );
};

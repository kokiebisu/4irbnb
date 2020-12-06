import React from "react";

/** styles **/
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import layout from "../../../styles/layout.module.scss";
import animation from "../../../styles/animation.module.scss";
import space from "../../../styles/space.module.scss";

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content }) => {
  return (
    <div
      className={`${[
        shape["br--30"],
        layout["flex"],
        layout["items-center"],
        color["bg--transparent"],
        space["p-t--13"],
        space["p-b--13"],
        space["p-l--15"],
        space["p-r--15"],
      ].join(" ")} ${
        inverse
          ? [animation["hover-background--white__transparent"]].join(" ")
          : [animation["hover-background--white__1"]].join(" ")
      }`}
    >
      {content}
    </div>
  );
};

import React from "react";

/** styles **/
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import button from "@button/button.module.scss";

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ name?: string }> = ({
  name = "Cancellation flexibility",
}) => {
  return (
    <div
      className={[
        button["hover__filter"],
        space["p-v--8"],
        space["p-h--14"],
        shape["br--20"],
        color["bg--transparent"],
      ].join(" ")}
    >
      <p className={[font["size--15"]].join(" ")}>{name}</p>
    </div>
  );
};

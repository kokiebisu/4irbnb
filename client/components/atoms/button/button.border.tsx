import React from "react";
import Link from "next/link";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";

/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */
export const BorderButton: React.FC<{
  title?: string;
  inverse?: boolean;
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  bold?: boolean;
}> = ({ title = "Button", inverse = false, size = "md", bold = true }) => {
  const renderBorder = () => {
    if (inverse && bold) {
      return [color["b-2--white"]].join(" ");
    }
    if (inverse) {
      return [color["b--white"]].join(" ");
    }
    if (bold) {
      return [color["b-2--black"]].join(" ");
    }
    return [color["b--black"]].join(" ");
  };

  const styles = {
    common: [font["text--center"], shape["br--6"], font["no-wrap"]].join(" "),
    sm: [
      font["size--14"],
      space["p-t--6"],
      space["p-b--6"],
      space["p-l--14"],
      space["p-r--14"],
    ].join(" "),
    md: [
      font["size--16"],
      space["p-t--10"],
      space["p-b--10"],
      space["p-l--18"],
      space["p-r--18"],
    ].join(" "),
    lg: [
      font["size--18"],
      space["p-t--12"],
      space["p-b--12"],
      space["p-l--22"],
      space["p-r--22"],
    ].join(" "),
  };

  return (
    <div className={`${styles["common"]} ${styles[size]} ${renderBorder()}`}>
      <h4 className={inverse ? color["c--white"] : undefined}>{title}</h4>
    </div>
  );
};

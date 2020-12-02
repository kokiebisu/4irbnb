import React from "react";
import Link from "next/link";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";

/** Props */
import { BorderButtonProps } from "./props";

/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */
export const BorderButton: React.FC<BorderButtonProps> = ({
  to = "/",
  title = "Button",
  inverse = false,
  size = "md",
  spread = false,
  bold = true,
}) => {
  const renderBorder = () => {
    if (inverse) {
      return [color["b--white__0"], color["c--white__0"]].join(" ");
    }
    if (bold) {
      return [color["b-2--black"]].join(" ");
    }
    return [color["b--black"]].join(" ");
  };

  const components = {
    sm: (
      <div className={color["bg--transparent"]} data-testid="button">
        <Link href={to}>
          <a
            className={`${spread ? layout["block"] : layout["inline-block"]} ${[
              font["text--center"],
              font["size--14"],
              font["weight--500"],
              shape["br--6"],
              space["p-t--6"],
              space["p-b--6"],
              space["p-l--14"],
              space["p-r--14"],
              font["no-wrap"],
            ].join(" ")} ${renderBorder()}`}
          >
            {title}
          </a>
        </Link>
      </div>
    ),
    md: (
      <div className={color["bg--transparent"]} data-testid="button">
        <Link href={to}>
          <a
            className={`${spread ? layout["block"] : layout["inline-block"]} ${[
              font["text--center"],
              font["size--16"],
              font["weight--500"],
              shape["br--6"],
              space["p-t--10"],
              space["p-b--10"],
              space["p-l--18"],
              space["p-r--18"],
              font["no-wrap"],
            ].join(" ")} ${renderBorder()}`}
          >
            {title}
          </a>
        </Link>
      </div>
    ),
    lg: (
      <div className={color["bg--transparent"]} data-testid="button">
        <Link href={to}>
          <a
            className={`${spread ? layout["block"] : layout["inline-block"]} ${[
              font["text--center"],
              font["size--18"],
              font["weight--500"],
              shape["br--6"],
              space["p-t--12"],
              space["p-b--12"],
              space["p-l--22"],
              space["p-r--22"],
              font["no-wrap"],
            ].join(" ")} ${renderBorder()}`}
          >
            {title}
          </a>
        </Link>
      </div>
    ),
  };
  return components[size];
};

import React from "react";

/** styles */
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** props */
import { UnderlineButtonProps } from "./props";

/**
 * Renders the underline button component
 * @param {function} onPress - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButton: React.FC<{
  title?: string;
  font?: number;
  bold?: boolean;
  unselected?: boolean;
}> = ({
  title = "Title here",
  font = 14,
  bold = false,
  unselected = false,
}) => {
  return (
    <div
      className={[layout["inline-block"], color["bg--transparent"]].join(" ")}
    >
      {bold ? (
        <h3
          style={{ fontSize: font }}
          className={unselected && [color["c--white__3"]].join(" ")}
        >
          {unselected ? title : <u>{title}</u>}
        </h3>
      ) : (
        <h4
          style={{ fontSize: font }}
          className={unselected && [color["c--white__3"]].join(" ")}
        >
          {unselected ? title : <u>{title}</u>}
        </h4>
      )}
    </div>
  );
};

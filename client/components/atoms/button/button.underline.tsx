import React from "react";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** Props */
import { UnderlineButtonProps } from "./props";

/**
 * Renders the underline button component
 * @param {function} onPress - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  title = "Title here",
  font = 14,
}) => {
  return (
    <div
      className={[layout["inline-block"], color["bg--transparent"]].join(" ")}
    >
      <h4 style={{ fontSize: font }}>
        <u>{title}</u>
      </h4>
    </div>
  );
};

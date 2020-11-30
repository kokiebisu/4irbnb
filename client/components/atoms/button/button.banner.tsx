import React from "react";

/** Styles */
import color from "../../../styles/color.module.scss";

/** Props */
import { BannerButtonProps } from "./props";

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<BannerButtonProps> = ({
  title = "Button",
}) => {
  return <div className={[color["bg--transparent"]].join(" ")}>{title}</div>;
};

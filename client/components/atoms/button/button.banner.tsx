import React from "react";

/** Styles */
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";

/** Props */
import { BannerButtonProps } from "./props";

import { motion } from "framer-motion";

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<BannerButtonProps> = ({
  title = "Button",
}) => {
  return (
    <motion.button
      data-testid="button"
      className={[color["bg--white__0"], shape["br--6"]].join(" ")}
    >
      <div
        className={[
          color["bg--white__0"],
          space["p-h--16"],
          space["p-v--8"],
          shape["br--6"],
          font["size--14"],
        ].join(" ")}
      >
        {title}
      </div>
    </motion.button>
  );
};

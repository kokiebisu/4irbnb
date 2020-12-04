import React from "react";
import { motion } from "framer-motion";

/** Props */
import { PrivacyButtonProps } from "./props";

/** Contexts */
import { useToggleDispatch } from "../../../context/toggle";

/** Styles */
import font from "../../../styles/font.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButton: React.FC<PrivacyButtonProps> = ({
  title = "Button",
  inverse = false,
}) => {
  const toggleDispatch = useToggleDispatch();

  const handlePress = () => {
    if (title === "Save") {
      // save the cookie
      return toggleDispatch({ type: "toggle_privacy" });
    }
    // open cookie preferences
    return toggleDispatch({ type: "toggle_privacy" });
  };
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      data-testid="button"
      className={`${[
        font["no-wrap"],
        space["p-v--13"],
        space["p-h--18"],
        font["weight--500"],
        shape["br--8"],
        shape["w--full"],
        shape["min-w--150"],
        font["size--15"],
      ].join(" ")} ${
        inverse
          ? [color["bg--gray__4"], color["b--transparent"]].join(" ")
          : [color["bg--transparent"], color["b--black"]].join(" ")
      }`}
      onClick={handlePress}
    >
      <h4
        className={
          inverse
            ? [color["c--white"]].join(" ")
            : [color["c--black"]].join(" ")
        }
      >
        {title}
      </h4>
    </motion.button>
  );
};

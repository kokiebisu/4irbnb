import React from "react";
import { motion } from "framer-motion";

/** styles **/
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import button from "./button.module.scss";

/** vectors */
import { ChevronLeft, ChevronRight } from "../../../public/svg/regular";

/** props */
import { PaginateButtonProps } from "./props";

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {function} onPress - The action being taken when the button is clicked
 * @param {boolean} disable - Whether if the button is disabled or not
 */
export const PaginateButton: React.FC<PaginateButtonProps> = ({
  direction = "left",
  disable = false,
}) => {
  const icons = {
    left: (
      <ChevronLeft
        width={10}
        stroke={`${disable ? "lightgray" : "black"}`}
        strokeWidth={5}
      />
    ),
    right: (
      <ChevronRight
        width={10}
        stroke={`${disable ? "lightgray" : "black"}`}
        strokeWidth={5}
      />
    ),
  };
  return (
    <>
      <div
        className={[
          button["bg__paginate"],
          space["p--8"],
          color["b--white__2"],
          shape["br--circle"],
        ].join(" ")}
      >
        {icons[direction]}
      </div>
    </>
  );
};

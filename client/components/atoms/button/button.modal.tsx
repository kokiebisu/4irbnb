import React from "react";

/** vectors */
import { Close } from "../../../public/svg/original";
import { ChevronLeft } from "../../../public/svg/regular";

/** styles **/
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import button from "./button.module.scss";
import shape from "../../../styles/shape.module.scss";

/** props */
import { ModalButtonProps } from "./props";

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButton: React.FC<ModalButtonProps> = ({
  modal = "close",
}) => {
  const types = {
    close: <Close width={16} height={16} stroke="black" strokeWidth={2} />,
    back: <ChevronLeft width={16} height={16} stroke="black" strokeWidth={4} />,
  };
  return (
    <div
      className={[
        color["bg--transparent"],
        space["p--8"],
        shape["br--circle"],
        button["hover__close"],
      ].join(" ")}
    >
      {types[modal]}
    </div>
  );
};

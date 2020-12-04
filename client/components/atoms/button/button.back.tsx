import React from "react";

/** Props */
import { BackButtonProps } from "./props";

/** Styles */
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** Vectors */
import { ChevronLeft } from "../../../public/svg/regular";

export const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <button
      onClick={onPress}
      className={[
        layout["flex"],
        layout["items-center"],
        color["bg--transparent"],
      ].join(" ")}
    >
      <div>
        <ChevronLeft width={20} stroke="#61AFB2" strokeWidth={3} />
      </div>
      <div>
        <h4 className={[font["size--15"], color["c--darkgreen__3"]].join(" ")}>
          Back
        </h4>
      </div>
    </button>
  );
};

import React from "react";

/** styles */
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** vectors */
import { ChevronLeft } from "../../../public/svg/regular";

export const BackButton: React.FC<{}> = () => {
  return (
    <div
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
    </div>
  );
};

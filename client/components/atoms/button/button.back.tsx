import React from "react";

/** Props */
import { BackButtonProps } from "./props";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** Vectors */
import { ChevronLeft } from "../../../public/svg/regular";

export const BackButton: React.FC<BackButtonProps> = ({
  onPress = () => alert("back button pressed"),
}) => {
  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div>
        <ChevronLeft width={20} stroke="#61AFB2" strokeWidth={3} />
      </div>
      <div>
        <h4 className={[color["c--darkgreen__3"]].join(" ")}>Back</h4>
      </div>
    </div>
  );
};

import React from "react";

/**
 * Props
 */
import { LoadingAnimationProps } from "./props";

/**
 * Styles
 */
import animation from "./animation.module.scss";
import color from "../../styles/color.module.scss";

/**
 * Renders the loading animation
 */
export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ dark }) => {
  return (
    <div className={[animation["circle__wrapper"]].join(" ")}>
      <span
        className={`${[
          animation["circle__content"],
          animation["circle__1"],
        ].join(" ")} ${dark ? color["bg--black"] : color["bg--white"]}`}
      />
      <span
        className={`${[
          animation["circle__content"],
          animation["circle__2"],
        ].join(" ")} ${dark ? color["bg--black"] : color["bg--white"]}`}
      />
      <span
        className={`${[
          animation["circle__content"],
          animation["circle__3"],
        ].join(" ")} ${dark ? color["bg--black"] : color["bg--white"]}`}
      />
    </div>
  );
};

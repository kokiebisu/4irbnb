import React from "react";

/** components */
import { LoadingAnimation } from "./animation.loading";

export interface AnimationProps {
  type?: string;
  extends?: any;
  [x: string]: any;
}

/**
 * Bundles the animation components
 * @param {string} type - Specifies the type of animation component
 */
export const Animation: React.FC<AnimationProps> = ({
  type = "loading",
  extendsTo,
  ...props
}) => {
  const types = {
    loading: <LoadingAnimation {...props} />,
  };
  return (
    <div data-testid="animation" className={extendsTo}>
      {types[type]}
    </div>
  );
};

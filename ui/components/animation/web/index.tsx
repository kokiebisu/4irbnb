/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
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
  const types: { [type: string]: JSX.Element } = {
    loading: <LoadingAnimation {...props} />,
  };
  return (
    <div data-testid="animation" className={extendsTo}>
      {types[type]}
    </div>
  );
};

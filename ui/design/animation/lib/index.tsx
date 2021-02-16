/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { LoadingAnimation } from "./web/animation.loading";

export const $Animation = {
  LOADING: "loading",
};

export interface AnimationProps {
  variant?: string;
  extends?: any;
  [props: string]: any;
}

/**
 * Bundles the animation components
 * @param {string} variant - Specifies the type of animation component
 */
export const Animation: React.FC<AnimationProps> = ({
  variant = $Animation.LOADING,
  extendsTo,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    [$Animation.LOADING]: <LoadingAnimation {...props} />,
  };
  return (
    <div data-testid={`${variant}-animation`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};

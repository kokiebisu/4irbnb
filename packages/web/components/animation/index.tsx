import { LoadingAnimationProps } from './animation-loading';
import { factory } from './utils/factory';

export type AnimationVariants = 'loading';

export interface AnimationProps extends LoadingAnimationProps {
  variant: AnimationVariants;
}

/**
 * Bundles the animation components
 * @param {string} type - Specifies the type of animation component
 */
export const Animation: React.FC<AnimationProps> = ({ variant, ...props }) => {
  const variants = factory(props);
  return <div data-testid="animation">{variants[variant].component}</div>;
};

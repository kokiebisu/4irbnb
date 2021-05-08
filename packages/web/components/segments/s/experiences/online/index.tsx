import { factory } from './utils/factory';

export type OnlineExperienceSegmentVariants =
  | 'banner'
  | 'cards'
  | 'starting'
  | 'collections';

export interface SegmentProps {
  variant: OnlineExperienceSegmentVariants;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({
  variant,
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants = factory(props);

  return (
    <div data-testid={`${variant}-online`}>{variants[variant].component}</div>
  );
};

import { factory } from './utils/factory';

export type IndexSegmentVariants =
  | 'category'
  | 'nearby'
  | 'banner'
  | 'online'
  | 'anywhere'
  | 'destinations'
  | 'worth';

export interface SegmentProps {
  variant: IndexSegmentVariants;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({ variant, ...props }) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-landing`}>{variants[variant].component}</div>
  );
};

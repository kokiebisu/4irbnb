export type HomesSegmentVariants =
  | 'all'
  | 'help'
  | 'banner'
  | 'community'
  | 'hosting'
  | 'priority'
  | 'ready';

export interface SegmentProps {
  variant: HomesSegmentVariants;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({
  variant = 'help',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-landing`}>{variants[variant].component}</div>
  );
};

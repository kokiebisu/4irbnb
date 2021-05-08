export const $Segment = {
  REVIEWS: 'reviews',
  ARRANGEMENTS: 'arrangements',
  AMENITIES: 'amenities',
  KNOW: 'know',
  HOST: 'host',
  PREVIEW: 'preview',
  OTHER: 'other',
  DESCRIPTION: 'description',
};

export type RoomsSegmentVariants =
  | 'reviews'
  | 'arrangements'
  | 'amenities'
  | 'know'
  | 'host'
  | 'preview'
  | 'other'
  | 'description';

export interface SegmentProps {
  variant: RoomsSegmentVariants;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({
  extendsTo = '',
  variant = 'reviews',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  return <div data-testid={`${variant}-stay`}>{variants[variant]}</div>;
};

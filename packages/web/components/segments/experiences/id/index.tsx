import { factory } from './utils/factory';

export type ExperiencesSegmentVariants =
  | 'available'
  | 'bring'
  | 'characteristic'
  | 'description'
  | 'experiences'
  | 'host'
  | 'know'
  | 'participate'
  | 'preview'
  | 'reviews';

export interface SegmentProps {
  variant: ExperiencesSegmentVariants;
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
  variant = 'experiences',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-onlinehost`}>
      {variants[variant].component}
    </div>
  );
};

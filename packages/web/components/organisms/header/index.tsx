import { factory } from './util/factory';

export type HeaderVariants =
  | 'landing'
  | 'white'
  | 'details'
  | 'homes'
  | 'experiences'
  | 'onlinehost'
  | 'stay';

export interface HeaderProps {
  extendsTo?: any;
  variant: HeaderVariants;
  [property: string]: any;
}

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
export const Header: React.FC<HeaderProps> = ({
  variant,
  extendsTo,
  ...props
}) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-header`}>{variants[variant].component}</div>
  );
};

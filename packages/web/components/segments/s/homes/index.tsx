import { Multiple } from './multiple';
import { Homes } from './homes';
import { Also } from './also';

export const $Segment = {
  MULTIPLE: 'multiple',
  HOMES: 'homes',
  ALSO: 'also',
};

export interface SegmentProps {
  extendsTo?: string;
  variant?: string;
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
  variant = 'multiple',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    multiple: <Multiple {...props} />,
    homes: <Homes {...props} />,
    also: <Also {...props} />,
  };

  return <div data-testid={`${variant}-help`}>{variants[variant]}</div>;
};

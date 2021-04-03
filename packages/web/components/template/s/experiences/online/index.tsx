import { Banner } from './banner';
import { Cards } from './cards';
import { Starting } from './starting';
import { Collections } from './collections';

export const $Template = {
  BANNER: 'banner',
  CARDS: 'cards',
  STARTING: 'starting',
  COLLECTIONS: 'collections',
};

export interface TemplateProps {
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
export const Template: React.FC<TemplateProps> = ({
  extendsTo = '',
  variant = 'banner',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    banner: <Banner {...props} />,
    cards: <Cards {...props} />,
    starting: <Starting {...props} />,
    collections: <Collections {...props} />,
  };

  return <div data-testid={`${variant}-online`}>{variants[variant]}</div>;
};

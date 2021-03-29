import { CategoryTemplate } from './template.category';
import { NearbyTemplate } from './template.nearby';
import { BannerTemplate } from './template.banner';
import { OnlineTemplate } from './template.online';
import { AnywhereTemplate } from './template.anywhere';
import { DestinationsTemplate } from './template.destinations';
import { WorthTemplate } from './template.worth';

export const $Template = {
  CATEGORY: 'category',
  NEARBY: 'nearby',
  BANNER: 'banner',
  ONLINE: 'online',
  ANYWHERE: 'anywhere',
  DESTINATIONS: 'destinations',
  WORTH: 'worth',
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
  variant = 'auth',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    category: <CategoryTemplate {...props} />,
    nearby: <NearbyTemplate {...props} />,
    banner: <BannerTemplate {...props} />,
    online: <OnlineTemplate {...props} />,
    anywhere: <AnywhereTemplate {...props} />,
    destinations: <DestinationsTemplate {...props} />,
    worth: <WorthTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-landing-template`}>{variants[variant]}</div>
  );
};

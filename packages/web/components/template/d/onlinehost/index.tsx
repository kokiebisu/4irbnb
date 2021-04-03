import { More } from '@template/d/onlinehost/more';
import { FAQ } from '@template/d/onlinehost/faq';
import { Back } from '@template/d/onlinehost/back';
import { Sharing } from '@template/d/onlinehost/sharing';
import { Works } from '@template/d/onlinehost/works';
import { Banner } from '@template/d/onlinehost/banner';

export const $Template = {
  BACK: 'back',
  BANNER: 'banner',
  FAQ: 'faq',
  MORE: 'more',
  SHARING: 'sharing',
  WORKS: 'works',
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
  variant = 'more',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    more: <More {...props} />,
    faq: <FAQ {...props} />,
    back: <Back {...props} />,
    sharing: <Sharing {...props} />,
    works: <Works {...props} />,
    banner: <Banner {...props} />,
  };

  return (
    <div data-testid={`${variant}-onlinehost-template`}>
      {variants[variant]}
    </div>
  );
};

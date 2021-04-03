import { More } from 'components/segments/d/onlinehost/more';
import { FAQ } from 'components/segments/d/onlinehost/faq';
import { Back } from 'components/segments/d/onlinehost/back';
import { Sharing } from 'components/segments/d/onlinehost/sharing';
import { Works } from 'components/segments/d/onlinehost/works';
import { Banner } from 'components/segments/d/onlinehost/banner';

export const $Segment = {
  BACK: 'back',
  BANNER: 'banner',
  FAQ: 'faq',
  MORE: 'more',
  SHARING: 'sharing',
  WORKS: 'works',
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

  return <div data-testid={`${variant}-onlinehost`}>{variants[variant]}</div>;
};

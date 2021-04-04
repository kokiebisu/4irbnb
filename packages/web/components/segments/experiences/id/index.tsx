import { Experiences } from 'components/segments/experiences/id/experiences';
import { Participate } from 'components/segments/experiences/id/participate';
import { Bring } from 'components/segments/experiences/id/bring';
import { Characteristics } from 'components/segments/experiences/id/characteristics';
import { Available } from 'components/segments/experiences/id/available';
import { Preview } from 'components/segments/experiences/id/preview';
import { Reviews } from 'components/segments/experiences/id/reviews';
import { Host } from 'components/segments/experiences/id/host';
import { Description } from 'components/segments/experiences/id/description';
import { Know } from 'components/segments/experiences/id/know';

export const $Segment = {
  AVAILABLE: 'available',
  BRING: 'bring',
  CHARACTERISTIC: 'characteristic',
  DESCRIPTION: 'description',
  EXPERIENCES: 'experiences',
  HOST: 'host',
  KNOW: 'know',
  PARTICIPATE: 'participate',
  PREVIEW: 'preview',
  REVIEWS: 'reviews',
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
  variant = 'experiences',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    experiences: <Experiences {...props} />,
    participate: <Participate {...props} />,
    bring: <Bring {...props} />,
    characteristics: <Characteristics {...props} />,
    available: <Available {...props} />,
    preview: <Preview {...props} />,
    reviews: <Reviews {...props} />,
    host: <Host {...props} />,
    description: <Description {...props} />,
    know: <Know {...props} />,
  };

  return <div data-testid={`${variant}-onlinehost`}>{variants[variant]}</div>;
};

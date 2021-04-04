import { Reviews } from 'components/segments/rooms/id/reviews';
import { Arrangements } from 'components/segments/rooms/id/arrangements';
import { Amenities } from 'components/segments/rooms/id/amenities';
import { Know } from 'components/segments/rooms/id/know';
import { Host } from 'components/segments/rooms/id/host';
import { Preview } from 'components/segments/rooms/id/preview';
import { Other } from 'components/segments/rooms/id/other';
import { Description } from 'components/segments/rooms/id/description';

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
  variant = 'reviews',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    reviews: <Reviews {...props} />,
    arrangements: <Arrangements {...props} />,
    amenities: <Amenities {...props} />,
    know: <Know {...props} />,
    host: <Host {...props} />,
    preview: <Preview {...props} />,
    other: <Other {...props} />,
    description: <Description {...props} />,
  };

  return <div data-testid={`${variant}-stay`}>{variants[variant]}</div>;
};

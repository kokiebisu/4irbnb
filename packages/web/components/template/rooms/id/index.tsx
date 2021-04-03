import { ReviewsTemplate } from '@template/rooms/id/template.reviews';
import { Arrangements } from '@template/rooms/id/arrangements';
import { Amenities } from '@template/rooms/id/amenities';
import { Know } from '@template/rooms/id/know';
import { Host } from '@template/rooms/id/host';
import { PreviewTemplate } from '@template/rooms/id/template.preview';
import { Other } from '@template/rooms/id/other';
import { Description } from '@template/rooms/id/description';

export const $Template = {
  REVIEWS: 'reviews',
  ARRANGEMENTS: 'arrangements',
  AMENITIES: 'amenities',
  KNOW: 'know',
  HOST: 'host',
  PREVIEW: 'preview',
  OTHER: 'other',
  DESCRIPTION: 'description',
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
  variant = 'reviews',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    reviews: <ReviewsTemplate {...props} />,
    arrangements: <Arrangements {...props} />,
    amenities: <Amenities {...props} />,
    know: <Know {...props} />,
    host: <Host {...props} />,
    preview: <PreviewTemplate {...props} />,
    other: <Other {...props} />,
    description: <Description {...props} />,
  };

  return <div data-testid={`${variant}-stay`}>{variants[variant]}</div>;
};

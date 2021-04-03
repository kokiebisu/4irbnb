import { ReviewsTemplate } from '@template/rooms/id/template.reviews';
import { ArrangementsTemplate } from '@template/rooms/id/template.arrangements';
import { Amenities } from '@template/rooms/id/amenities';
import { KnowTemplate } from '@template/rooms/id/template.know';
import { HostTemplate } from '@template/rooms/id/template.host';
import { PreviewTemplate } from '@template/rooms/id/template.preview';
import { OtherTemplate } from '@template/rooms/id/template.other';
import { DescriptionTemplate } from '@template/rooms/id/template.description';

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
    arrangements: <ArrangementsTemplate {...props} />,
    amenities: <Amenities {...props} />,
    know: <KnowTemplate {...props} />,
    host: <HostTemplate {...props} />,
    preview: <PreviewTemplate {...props} />,
    other: <OtherTemplate {...props} />,
    description: <DescriptionTemplate {...props} />,
  };

  return <div data-testid={`${variant}-stay`}>{variants[variant]}</div>;
};

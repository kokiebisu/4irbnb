import { ExperiencesTemplate } from '@template/experiences/id/template.experiences';
import { ParticipateTemplate } from '@template/experiences/id/template.participate';
import { Bring } from '@template/experiences/id/bring';
import { CharacteristicsTemplate } from '@template/experiences/id/template.characteristics';
import { Available } from '@template/experiences/id/available';
import { PreviewTemplate } from '@template/experiences/id/template.preview';
import { ReviewsTemplate } from '@template/experiences/id/template.reviews';
import { HostTemplate } from '@template/experiences/id/template.host';
import { DescriptionTemplate } from '@template/experiences/id/template.description';
import { KnowTemplate } from '@template/experiences/id/template.know';

export const $Template = {
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
  variant = 'experiences',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    experiences: <ExperiencesTemplate {...props} />,
    participate: <ParticipateTemplate {...props} />,
    bring: <Bring {...props} />,
    characteristics: <CharacteristicsTemplate {...props} />,
    available: <Available {...props} />,
    preview: <PreviewTemplate {...props} />,
    reviews: <ReviewsTemplate {...props} />,
    host: <HostTemplate {...props} />,
    description: <DescriptionTemplate {...props} />,
    know: <KnowTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-onlinehost--template`}>
      {variants[variant]}
    </div>
  );
};

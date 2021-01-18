import { ExperiencesTemplate } from "./template.experiences";
import { ParticipateTemplate } from "./template.participate";
import { BringTemplate } from "./template.bring";
import { CharacteristicsTemplate } from "./template.characteristics";
import { AvailableTemplate } from "./template.available";
import { PreviewTemplate } from "./template.preview";
import { ReviewsTemplate } from "./template.reviews";
import { HostTemplate } from "./template.host";
import { DescriptionTemplate } from "./template.description";
import { KnowTemplate } from "./template.know";

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
  extendsTo = "",
  variant = "experiences",
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
    bring: <BringTemplate {...props} />,
    characteristics: <CharacteristicsTemplate {...props} />,
    available: <AvailableTemplate {...props} />,
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

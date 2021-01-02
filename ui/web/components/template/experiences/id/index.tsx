import { ExperiencesTemplate } from "@template/experiences/id/template.experiences";
import { ParticipateTemplate } from "@template/experiences/id/template.participate";
import { BringTemplate } from "@template/experiences/id/template.bring";
import { CharacteristicsTemplate } from "@template/experiences/id/template.characteristics";
import { AvailableTemplate } from "@template/experiences/id/template.available";

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
  variant = "auth",
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    experiences: <ExperiencesTemplate {...props} />,
    participate: <ParticipateTemplate {...props} />,
    bring: <BringTemplate {...props} />,
    characteristics: <CharacteristicsTemplate {...props} />,
    available: <AvailableTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-onlinehost--template`}>
      {variants[variant]}
    </div>
  );
};

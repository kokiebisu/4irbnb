import { ExperiencesTemplate } from "@template/onlinehost/template.experiences";
import { ParticipateTemplate } from "@template/onlinehost/template.participate";
import { BringTemplate } from "@template/onlinehost/template.bring";
import { CharacteristicsTemplate } from "@template/onlinehost/template.characteristics";
import { AvailableTemplate } from "@template/onlinehost/template.available";

/** styles **/
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import animation from "@styles/animation.module.scss";

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

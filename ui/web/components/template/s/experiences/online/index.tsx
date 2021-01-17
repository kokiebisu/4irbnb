/** landing */
import { BannerTemplate } from "@template/s/experiences/online/template.banner";
import { CardsTemplate } from "@template/s/experiences/online/template.cards";
import { StartingTemplate } from "@template/s/experiences/online/template.starting";

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
  variant = "banner",
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [key: string]: JSX.Element } = {
    banner: <BannerTemplate {...props} />,
    cards: <CardsTemplate {...props} />,
    starting: <StartingTemplate {...props} />,
  };

  return <div data-testid={`${variant}--template`}>{variants[variant]}</div>;
};

/** landing */
import { HelpTemplate } from "@template/stays/template.help";
import { MultipleTemplate } from "@template/stays/template.multiple";
import { HomesTemplate } from "@template/stays/template.homes";
import { AllTemplate } from "@template/stays/template.all";
import { AlsoTemplate } from "@template/stays/template.also";
import { PriorityTemplate } from "@template/stays/template.priority";
import { ReadyTemplate } from "./template.ready";

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
    help: <HelpTemplate {...props} />,
    multiple: <MultipleTemplate {...props} />,
    homes: <HomesTemplate {...props} />,
    all: <AllTemplate {...props} />,
    also: <AlsoTemplate {...props} />,
    priority: <PriorityTemplate {...props} />,
    ready: <ReadyTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-help--template`}>{variants[variant]}</div>
  );
};

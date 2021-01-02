/** landing */
import { MultipleTemplate } from "@template/s/homes/template.multiple";
import { HomesTemplate } from "@template/s/homes/template.homes";
import { AlsoTemplate } from "@template/s/homes/template.also";

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
    multiple: <MultipleTemplate {...props} />,
    homes: <HomesTemplate {...props} />,
    also: <AlsoTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-help--template`}>{variants[variant]}</div>
  );
};

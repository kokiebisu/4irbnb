/** landing */
import { MoreTemplate } from "./template.more";
import { FAQTemplate } from "./template.faq";
import { BackTemplate } from "./template.back";
import { SharingTemplate } from "./template.sharing";
import { WorksTemplate } from "./template.works";
import { BannerTemplate } from "./template.banner";

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
  variant = "more",
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    more: <MoreTemplate {...props} />,
    faq: <FAQTemplate {...props} />,
    back: <BackTemplate {...props} />,
    sharing: <SharingTemplate {...props} />,
    works: <WorksTemplate {...props} />,
    banner: <BannerTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-onlinehost--template`}>
      {variants[variant]}
    </div>
  );
};

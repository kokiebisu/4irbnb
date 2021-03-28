import { MoreTemplate } from "@template/d/onlinehost/template.more";
import { FAQTemplate } from "@template/d/onlinehost/template.faq";
import { BackTemplate } from "@template/d/onlinehost/template.back";
import { SharingTemplate } from "@template/d/onlinehost/template.sharing";
import { WorksTemplate } from "@template/d/onlinehost/template.works";
import { BannerTemplate } from "@template/d/onlinehost/template.banner";

export const $Template = {
  BACK: "back",
  BANNER: "banner",
  FAQ: "faq",
  MORE: "more",
  SHARING: "sharing",
  WORKS: "works",
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

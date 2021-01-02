/** landing */
import { ReviewsTemplate } from "@template/rooms/id/template.reviews";
import { ArrangementsTemplate } from "@template/rooms/id/template.arrangements";
import { AmenitiesTemplate } from "@template/rooms/id/template.amenities";
import { KnowTemplate } from "@template/rooms/id/template.know";
import { HostTemplate } from "@template/rooms/id/template.host";
import { PanelTemplate } from "@template/rooms/id/template.panel";
import { OtherTemplate } from "@template/rooms/id/template.other";
import { DescriptionTemplate } from "./template.description";

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
    reviews: <ReviewsTemplate {...props} />,
    arrangements: <ArrangementsTemplate {...props} />,
    amenities: <AmenitiesTemplate {...props} />,
    know: <KnowTemplate {...props} />,
    host: <HostTemplate {...props} />,
    panel: <PanelTemplate {...props} />,
    other: <OtherTemplate {...props} />,
    description: <DescriptionTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-stay--template`}>{variants[variant]}</div>
  );
};

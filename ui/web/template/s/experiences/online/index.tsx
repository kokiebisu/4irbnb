/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { BannerTemplate } from "./template.banner";
import { CardsTemplate } from "./template.cards";
import { StartingTemplate } from "./template.starting";
import { CollectionsTemplate } from "./template.collections";

export const $Template = {
  BANNER: "banner",
  CARDS: "cards",
  STARTING: "starting",
  COLLECTIONS: "collections",
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
    collections: <CollectionsTemplate {...props} />,
  };

  return <div data-testid={`${variant}--template`}>{variants[variant]}</div>;
};

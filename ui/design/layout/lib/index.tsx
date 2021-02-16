/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { InputLayout } from "./web/layout.input";
import { CreateLayout } from "./web/layout.create";
import { HomesLayout } from "./web/section/layout.homes";
import { LandingLayout } from "./web/section/layout.landing";
import { OnlineHostLayout } from "./web/section/layout.onlinehost";
import { CurrencyLayout } from "./web/layout.currency";
import { LocationLayout } from "./web/modal/layout.location";

export const $Layout = {
  INPUT: "input",
  CREATE: "create",
  HOMES: "homes",
  LANDING: "landing",
  ONLINEHOST: "onlinehost",
  CURRENCY: "currency",
  LOCATION: "location",
};

export interface LayoutProps {
  extendsTo?: string;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the Layout components
 * @param {string} extendsTo - Customize the component wrapper
 * @param {string} variant - Specify the variant of the component
 */
export const Layout: React.FC<LayoutProps> = ({
  extendsTo,
  variant = $Layout.INPUT,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    [$Layout.INPUT]: <InputLayout {...props} />,
    [$Layout.CREATE]: <CreateLayout {...props} />,
    [$Layout.HOMES]: <HomesLayout {...props} />,
    [$Layout.LANDING]: <LandingLayout {...props} />,
    [$Layout.ONLINEHOST]: <OnlineHostLayout {...props} />,
    [$Layout.CURRENCY]: <CurrencyLayout {...props} />,
    [$Layout.LOCATION]: <LocationLayout {...props} />,
  };

  return (
    <div className={extendsTo} data-testid={`${variant}-layout`}>
      {variants[variant]}
    </div>
  );
};

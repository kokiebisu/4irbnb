/** layouts */
import { InputLayout } from "./layout.input";
import { CreateLayout } from "./layout.create";
import { HomesLayout } from "./section/layout.homes";
import { LandingLayout } from "./section/layout.landing";
import { OnlineHostLayout } from "./section/layout.onlinehost";
import { CurrencyLayout } from "./layout.currency";
import { LocationLayout } from "./modal/layout.location";

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
  variant = "input",
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    input: <InputLayout {...props} />,
    create: <CreateLayout {...props} />,
    homes: <HomesLayout {...props} />,
    landing: <LandingLayout {...props} />,
    onlinehost: <OnlineHostLayout {...props} />,
    currency: <CurrencyLayout {...props} />,
    location: <LocationLayout {...props} />,
  };

  return (
    <div className={extendsTo} data-testid={`${variant}-layout`}>
      {variants[variant]}
    </div>
  );
};

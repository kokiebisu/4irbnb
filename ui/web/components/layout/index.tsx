/** layouts */
import { InputLayout } from "@layout/layout.input";
import { CreateLayout } from "@layout/layout.create";
import { HomesLayout } from "@layout/section/layout.homes";
import { LandingLayout } from "@layout/section/layout.landing";
import { OnlineHostLayout } from "@layout/section/layout.onlinehost";
import { CurrencyLayout } from "@layout/layout.currency";
import { LocationLayout } from "@layout/modal/layout.location";

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

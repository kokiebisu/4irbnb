/** layouts */
import { InputLayoutProps } from "./layout.input";
import { CreateLayoutProps } from "./layout.create";
import { HomesLayoutProps } from "./section/layout.homes";
import { LandingLayoutProps } from "./section/layout.landing";
import { OnlineHostLayoutProps } from "./section/layout.onlinehost";
import { CurrencyLayoutProps } from "./layout.currency";
import { LocationLayoutProps } from "./modal/layout.location";
import { factory } from "./factory";

export type LayoutProps = (
  | ({ variant: "input" } & InputLayoutProps)
  | ({ variant: "create" } & CreateLayoutProps)
  | ({ variant: "homes" } & HomesLayoutProps)
  | ({ variant: "landing" } & LandingLayoutProps)
  | ({ variant: "onlinehost" } & OnlineHostLayoutProps)
  | ({ variant: "currency" } & CurrencyLayoutProps)
  | ({ variant: "location" } & LocationLayoutProps)
) & { children: JSX.Element };

/**
 * Bundles the Layout components
 * @param {string} extendsTo - Customize the component wrapper
 * @param {string} variant - Specify the variant of the component
 */
export const Layout = (props: LayoutProps): JSX.Element => factory(props);

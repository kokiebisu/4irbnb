import { LayoutProps } from "./index";
import { CreateLayout } from "./layout.create";
import { CurrencyLayout } from "./layout.currency";
import { InputLayout } from "./layout.input";
import { LocationLayout } from "./modal/layout.location";
import { HomesLayout } from "./section/layout.homes";
import { LandingLayout } from "./section/layout.landing";
import { OnlineHostLayout } from "./section/layout.onlinehost";

export const factory = ({ children, ...props }: LayoutProps): JSX.Element => {
  switch (props.variant) {
    case "create":
      return <CreateLayout {...props}>{children}</CreateLayout>;
    case "currency":
      return <CurrencyLayout {...props}>{children}</CurrencyLayout>;
    case "input":
      return <InputLayout {...props}>{children}</InputLayout>;
    case "homes":
      return <HomesLayout {...props}>{children}</HomesLayout>;
    case "landing":
      return <LandingLayout {...props}>{children}</LandingLayout>;
    case "onlinehost":
      return <OnlineHostLayout {...props}>{children}</OnlineHostLayout>;
    case "location":
      return <LocationLayout {...props}>{children}</LocationLayout>;
    default:
      throw new Error(`[Layout]: Invalid variant`);
  }
};

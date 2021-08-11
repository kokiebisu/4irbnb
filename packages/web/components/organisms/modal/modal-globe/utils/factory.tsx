import { CurrencyInner } from "../currency";
import { LanguageInner } from "../language";

export const inner = (props: GlobeModalInnerProps) => {
  switch (props.variant) {
    case "currency":
      return <CurrencyInner />;
    case "language":
      return <LanguageInner />;
    default:
      throw new Error(`Invalid Inner`);
  }
};

export type GlobeModalInnerProps =
  | { variant: "currency" }
  | { variant: "language" };

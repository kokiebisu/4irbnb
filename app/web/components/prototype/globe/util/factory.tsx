import { PrototypeProps } from "..";
import { CurrencyPrototypeTemplate } from "../prototype-globe-currency/template";
import { LanguagePrototypeTemplate } from "../prototype-globe-language/template";

export const factory = (props: PrototypeProps) => {
  switch (props.variant) {
    case "currency":
      return <CurrencyPrototypeTemplate />;
    case "language":
      return <LanguagePrototypeTemplate />;
    default:
      throw new Error(`[Prototype] Invalid variant`);
  }
};

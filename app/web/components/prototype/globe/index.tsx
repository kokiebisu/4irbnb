import { CurrencyPrototypeProps } from "./prototype-globe-currency";
import { LanguagePrototypeProps } from "./prototype-globe-language";
import { factory } from "./util/factory";

export type PrototypeProps =
  | ({ variant: "currency" } & CurrencyPrototypeProps)
  | ({ variant: "language" } & LanguagePrototypeProps);

export const Prototype = ({ ...props }: PrototypeProps): JSX.Element =>
  factory(props);

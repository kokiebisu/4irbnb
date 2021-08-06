import {
  CurrencyPrototypeTemplate,
  CurrencyPrototypeTemplateProps,
} from "./template";

export interface CurrencyPrototypeProps
  extends CurrencyPrototypeTemplateProps {}

export const CurrencyPrototype: React.FC<CurrencyPrototypeProps> = (props) => (
  <CurrencyPrototypeTemplate {...props} />
);

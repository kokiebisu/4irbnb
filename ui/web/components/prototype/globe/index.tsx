/** globe templates */
import { LanguagePrototype } from "@prototype/globe/prototype.language";
import { CurrencyPrototype } from "@prototype/globe/prototype.currency";

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "language",
  city = "Paris",
  stayType = "house",
  characteristics,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    language: <LanguagePrototype {...props} />,
    currency: <CurrencyPrototype {...props} />,
  };
  return (
    <div data-testid={`${variant}-globe-template`}>{variants[variant]}</div>
  );
};

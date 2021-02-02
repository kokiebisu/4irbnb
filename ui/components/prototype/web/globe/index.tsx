/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { LanguagePrototype } from "./prototype.language";
import { CurrencyPrototype } from "./prototype.currency";

export const $Prototype = {
  LANGUAGE: "language",
  CURRENCY: "currency",
};

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = $Prototype.LANGUAGE,
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

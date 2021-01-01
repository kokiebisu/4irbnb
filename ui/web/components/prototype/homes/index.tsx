/** homes templates */
import { CategoryPrototype } from "@prototype/homes/prototype.category";
import { NearbyPrototype } from "@prototype/homes/prototype.nearby";

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "nearby",
  city = "City",
  stayType = "house",
  characteristics,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    nearby: <NearbyPrototype {...props} />,
    category: <CategoryPrototype {...props} />,
  };
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};

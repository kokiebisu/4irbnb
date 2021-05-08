import {
  CategoryPrototype,
  CategoryPrototypeProps,
} from './prototype-homes-category';
import {
  NearbyPrototype,
  NearbyPrototypeProps,
} from './prototype-homes-nearby';

export type HomesPrototypeVariants = 'category' | 'nearby';
export interface PrototypeProps
  extends CategoryPrototypeProps,
    NearbyPrototypeProps {
  variant: HomesPrototypeVariants;
}

export const Prototype: React.FC<PrototypeProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    nearby: <NearbyPrototype {...props} />,
    category: <CategoryPrototype {...props} />,
  };
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};

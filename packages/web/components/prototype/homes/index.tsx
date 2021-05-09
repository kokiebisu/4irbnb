import { CategoryPrototypeProps } from './prototype-homes-category';
import { NearbyPrototypeProps } from './prototype-homes-nearby';
import { factory } from './util/factory';

export type HomesPrototypeVariants = 'category' | 'nearby';
export interface PrototypeProps
  extends CategoryPrototypeProps,
    NearbyPrototypeProps {
  variant: HomesPrototypeVariants;
}

export const Prototype: React.FC<PrototypeProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: { component: JSX.Element } } = factory(
    props
  );
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};

import {
  CategoryPrototype,
  CategoryPrototypeProps,
} from '@prototype/homes/prototype.category';
import {
  NearbyPrototype,
  NearbyPrototypeProps,
} from '@prototype/homes/prototype.nearby';

export const $Prototype = {
  CATEGORY: 'category',
  NEARBY: 'nearby',
};

export interface PrototypeProps
  extends CategoryPrototypeProps,
    NearbyPrototypeProps {
  variant: string;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = $Prototype.NEARBY,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    nearby: <NearbyPrototype {...props} />,
    category: <CategoryPrototype {...props} />,
  };
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};

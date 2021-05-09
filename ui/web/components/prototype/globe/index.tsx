import { factory } from './util/factory';

export type GlobePrototypeVariants = 'language' | 'currency';
export interface PrototypeProps {
  variant: GlobePrototypeVariants;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant,
  city = 'Paris',
  stayType = 'house',
  characteristics,
  ...props
}) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-globe-template`}>{variants[variant]}</div>
  );
};

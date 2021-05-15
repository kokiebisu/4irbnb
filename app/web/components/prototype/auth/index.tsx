import { factory } from './util/factory';

export type AuthPrototypeVariants =
  | 'login'
  | 'signup'
  | 'auth'
  | 'forgotpassword'
  | 'exists';

export interface PrototypeProps {
  variant?: AuthPrototypeVariants;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = 'login',
  ...props
}) => {
  const variants: {
    [variant: string]: { component: JSX.Element };
  } = factory(props);
  return (
    <div data-testid={`${variant}-auth-prototype`}>{variants[variant]}</div>
  );
};

import { StayPrototype } from "@prototype/searchbar/searchbar.stay";

export interface PrototypeProps {
  variant?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "stay",
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    stay: <StayPrototype {...props} />,
  };
  return (
    <div data-testid={`${variant}-searchbar-prototype`}>
      {variants[variant]}
    </div>
  );
};

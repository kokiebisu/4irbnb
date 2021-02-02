/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { SliderParticle } from "./particle.slider";

export const $Particle = {
  SLIDER: "slider",
};

export const Particle: React.FC<{
  variant: string;
  [property: string]: any;
}> = ({ variant, ...props }) => {
  const variants: { [type: string]: JSX.Element } = {
    slider: <SliderParticle {...props} />,
  };

  return variants && variants[variant];
};

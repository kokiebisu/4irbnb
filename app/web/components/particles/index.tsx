import React from "react";
import { ImageSlider } from "./particle-slider/template";

export const Particle = (props: any) => {
  switch (props.variant) {
    case "slider":
      return <ImageSlider {...props} />;
    default:
      throw new Error(`[Particles]: Invalid variant`);
  }
};

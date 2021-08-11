import React from "react";
import { PlaceInputTemplate, PlaceInputTemplateProps } from "./template";

export type PlaceInputProps = PlaceInputTemplateProps;

export const PlaceInput = (props: PlaceInputProps): JSX.Element => (
  <PlaceInputTemplate {...props} />
);

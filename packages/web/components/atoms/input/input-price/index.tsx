import React from "react";
import { PriceInputTemplate, PriceInputTemplateProps } from "./template";

export type PriceInputProps = PriceInputTemplateProps;

export const PriceInput = (props: PriceInputProps): JSX.Element => (
  <PriceInputTemplate {...props} />
);

import React from "react";
import { SelectInputTemplate, SelectInputTemplateProps } from "./template";

export type SelectInputProps = SelectInputTemplateProps;

export const SelectInput = (props: SelectInputProps): JSX.Element => (
  <SelectInputTemplate {...props} />
);

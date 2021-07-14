import React from "react";
import { AnotherInputTemplate, AnotherInputTemplateProps } from "./template";

export type AnotherInputProps = AnotherInputTemplateProps;

export const AnotherInput = (props: AnotherInputProps): JSX.Element => {
  return <AnotherInputTemplate {...props} />;
};

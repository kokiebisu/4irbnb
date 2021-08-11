import React from "react";
import { VerifyInputTemplate, VerifyInputTemplateProps } from "./template";

export type VerifyInputProps = VerifyInputTemplateProps;

export const VerifyInput = (props: VerifyInputProps): JSX.Element => {
  return <VerifyInputTemplate {...props} />;
};

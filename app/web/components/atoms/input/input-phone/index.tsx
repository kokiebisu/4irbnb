import React from "react";
import {
  PhoneNumberInputTemplate,
  PhoneNumberInputTemplateProps,
} from "./template";

export type PhoneInputProps = PhoneNumberInputTemplateProps;

export const PhonNumberInput = (props: PhoneInputProps): JSX.Element => (
  <PhoneNumberInputTemplate {...props} />
);

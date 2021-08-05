import React from "react";
import { CreateLayout } from "./layout.create";
import { CurrencyLayout } from "./layout.currency";
import { InputLayout } from "./layout.input";

export const factory = ({ children, ...props }) => {
  switch (props.variant) {
    case "create":
      return <CreateLayout {...props}>{children}</CreateLayout>;
    case "currency":
      return <CurrencyLayout {...props}>{children}</CurrencyLayout>;
    case "input":
      return <InputLayout>{children}</InputLayout>;
    default:
      throw new Error(`[Layout]: Invalid variant`);
  }
};

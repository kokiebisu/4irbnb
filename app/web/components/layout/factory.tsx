import { properties } from "components/atoms/input/logic/logic.types";
import React from "react";
import { CreateLayout } from "./layout.create";
import { CurrencyLayout } from "./layout.currency";
import { InputLayout } from "./layout.input";

export const factory = ({ children, ...props }) => {
  switch (props.variant) {
    case "create":
      return <CreateLayout>{children}</CreateLayout>;
    case "currency":
      return <CurrencyLayout>{children}</CurrencyLayout>;
    case "input":
      return <InputLayout>{children}</InputLayout>;
  }
};

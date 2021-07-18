import React from "react";
import { PrototypeProps } from "..";
import { AuthPrototype } from "../prototype-auth-auth";
import { ExistsPrototype } from "../prototype-auth-exists";
import { ForgotPasswordPrototype } from "../prototype-auth-forgot";
import { LoginPrototype } from "../prototype-auth-login";
import { SignupPrototype } from "../prototype-auth-signup";

export const factory = (props: PrototypeProps) => {
  switch (props.variant) {
    case "auth":
      return <AuthPrototype {...props} />;
    case "exists":
      return <ExistsPrototype {...props} />;
    case "forgot":
      return <ForgotPasswordPrototype {...props} />;
    case "login":
      return <LoginPrototype {...props} />;
    case "signup":
      return <SignupPrototype {...props} />;
    default:
      throw new Error("[prototype] invaliid variant provided");
  }
};

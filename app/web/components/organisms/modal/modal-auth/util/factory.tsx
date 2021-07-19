import React from "react";
import { AuthPrototype } from "../prototype-auth-auth";
import { ExistsPrototype } from "../prototype-auth-exists";
import { ForgotPasswordPrototype } from "../prototype-auth-forgot";
import { SignupPrototype } from "../prototype-auth-signup";

export const factory = (props) => {
  switch (props.variant) {
    case "auth":
      return <AuthPrototype {...props} />;
    case "exists":
      return <ExistsPrototype {...props} />;
    case "forgot":
      return <ForgotPasswordPrototype {...props} />;
    case "signup":
      return <SignupPrototype {...props} />;
    default:
      throw new Error("[prototype] invaliid variant provided");
  }
};

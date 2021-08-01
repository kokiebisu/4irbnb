import React from "react";

import { ExistsPrototype } from "../exists";
import { ForgotPasswordPrototype } from "../forgot";
import { SignupPrototype } from "../signup";

export const factory = (props) => {
  switch (props.variant) {
    case "phone":
      return <PhonePrototype {...props} />;
    case "email":
      return <EmailPrototype {...props} />;
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

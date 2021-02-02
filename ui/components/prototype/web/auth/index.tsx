/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { AuthPrototype } from "./prototype.auth";
import { LoginTemplate } from "./prototype.login";
import { SignupTemplate } from "./prototype.signup";
import { ForgotPasswordPrototype } from "./prototype.forgot";
import { ExistsPrototype } from "./prototype.exists";

export const $Prototype = {
  LOGIN: "login",
  SIGNUP: "signup",
  AUTH: "auth",
  FORGOTPASSWORD: "forgotpassword",
  EXISTS: "exists",
};

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = $Prototype.LOGIN,
  ...props
}) => {
  console.log("varian", variant);
  const variants: { [variant: string]: JSX.Element } = {
    login: <LoginTemplate {...props} />,
    signup: <SignupTemplate {...props} />,
    auth: <AuthPrototype {...props} />,
    forgotpassword: <ForgotPasswordPrototype {...props} />,
    exists: <ExistsPrototype {...props} />,
  };
  return (
    <div data-testid={`${variant}-auth-prototype`}>{variants[variant]}</div>
  );
};

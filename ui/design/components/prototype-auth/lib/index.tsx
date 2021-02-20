/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { AuthPrototype } from "./web/prototype.auth";
import { LoginTemplate } from "./web/prototype.login";
import { SignupTemplate } from "./web/prototype.signup";
import { ForgotPasswordPrototype } from "./web/prototype.forgot";
import { ExistsPrototype } from "./web/prototype.exists";

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

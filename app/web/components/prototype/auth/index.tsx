import { AuthPrototypeProps } from "./prototype-auth-auth";
import { ExistsPrototypeProps } from "./prototype-auth-exists";
import { ForgotPasswordPrototypeProps } from "./prototype-auth-forgot";
import { LoginPrototypeProps } from "./prototype-auth-login";
import { SignupPrototypeProps } from "./prototype-auth-signup";
import { factory } from "./util/factory";

export type PrototypeProps =
  | ({ variant: "login" } & LoginPrototypeProps)
  | ({ variant: "signup" } & SignupPrototypeProps)
  | ({ variant: "auth" } & AuthPrototypeProps)
  | ({ variant: "forgotpassword" } & ForgotPasswordPrototypeProps)
  | ({ variant: "exists" } & ExistsPrototypeProps);

export const Prototype = ({ ...props }: PrototypeProps) => factory(props);

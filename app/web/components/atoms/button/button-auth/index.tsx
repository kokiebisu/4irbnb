import { AuthButtonTemplate, AuthButtonTemplateProps } from "./template";

export type AuthButtonProps = AuthButtonTemplateProps;

export const AuthButton = ({ ...props }: AuthButtonProps): JSX.Element => {
  return <AuthButtonTemplate {...props} />;
};

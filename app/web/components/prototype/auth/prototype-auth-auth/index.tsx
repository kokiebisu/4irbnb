import { useAuthPrototype } from "./logic";
import { AuthPrototypeTemplate, AuthPrototypeTemplateProps } from "./template";

export interface AuthPrototypeProps extends AuthPrototypeTemplateProps {}

export const AuthPrototype: React.FC<AuthPrototypeProps> = (props) => {
  const data = useAuthPrototype();
  return <AuthPrototypeTemplate {...props} {...data} />;
};

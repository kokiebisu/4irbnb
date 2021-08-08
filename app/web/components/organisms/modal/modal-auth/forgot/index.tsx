import {
  ForgotPasswordPrototypeTemplate,
  ForgotPasswordPrototypeTemplateProps,
} from "./template";

export interface ForgotPasswordPrototypeProps
  extends ForgotPasswordPrototypeTemplateProps {}

export const ForgotPasswordPrototype: React.FC<ForgotPasswordPrototypeProps> = (
  props
) => <ForgotPasswordPrototypeTemplate {...props} />;

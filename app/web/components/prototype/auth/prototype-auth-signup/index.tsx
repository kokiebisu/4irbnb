import {
  SignupPrototypeTemplate,
  SignupPrototypeTemplateProps,
} from "./template";

export type SignupPrototypeProps = SignupPrototypeTemplateProps;

export const SignupPrototype = (props: SignupPrototypeProps): JSX.Element => (
  <SignupPrototypeTemplate {...props} />
);

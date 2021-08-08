import { useEmailPrototype } from "./logic";
import {
  EmailPrototypeTemplate,
  EmailPrototypeTemplateProps,
} from "./template";

export interface EmailPrototypeProps extends EmailPrototypeTemplateProps {}

export const EmailPrototype: React.FC<EmailPrototypeProps> = (props) => {
  const data = useEmailPrototype();
  return <EmailPrototypeTemplate {...props} {...data} />;
};

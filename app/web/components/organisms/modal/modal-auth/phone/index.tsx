import { usePhonePrototype } from "./logic";
import {
  PhonePrototypeTemplate,
  PhonePrototypeTemplateProps,
} from "./template";

export interface PhonePrototypeProps extends PhonePrototypeTemplateProps {}

export const PhonePrototype: React.FC<PhonePrototypeProps> = (props) => {
  const data = usePhonePrototype();
  return <PhonePrototypeTemplate {...props} {...data} />;
};

import {
  LanguagePrototypeTemplate,
  LanguagePrototypeTemplateProps,
} from "./template";

export interface LanguagePrototypeProps
  extends LanguagePrototypeTemplateProps {}

export const LanguagePrototype: React.FC<LanguagePrototypeProps> = (props) => {
  return <LanguagePrototypeTemplate {...props} />;
};

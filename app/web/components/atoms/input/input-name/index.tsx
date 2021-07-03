import { NameInputTemplate, NameInputTemplateProps } from './template';

export interface NameInputProps extends NameInputTemplateProps {}

export const NameInput: React.FC<NameInputProps> = (props) => {
  return <NameInputTemplate {...props} />;
};

import {
  BirthdateInputTemplate,
  BirthdateInputTemplateProps,
} from './template';

export interface BirthdateInputProps extends BirthdateInputTemplateProps {}

export const BirthdateInput: React.FC<BirthdateInputProps> = (props) => {
  return <BirthdateInputTemplate {...props} />;
};

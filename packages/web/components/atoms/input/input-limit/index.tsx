import { LimitInputTemplate, LimitInputTemplateProps } from './template';

export interface LimitInputProps extends LimitInputTemplateProps {}

export const LimitInput: React.FC<LimitInputProps> = (props) => {
  return <LimitInputTemplate {...props} />;
};

export const limit = (props) => {
  return {
    limit: <LimitInput {...props} />,
  };
};

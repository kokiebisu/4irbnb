import {
  UnderlineButtonTemplate,
  UnderlineButtonTemplateProps,
} from './template';

export interface UnderlineButtonProps extends UnderlineButtonTemplateProps {}

export const UnderlineButton: React.FC<UnderlineButtonProps> = (props) => {
  return <UnderlineButtonTemplate {...props} />;
};

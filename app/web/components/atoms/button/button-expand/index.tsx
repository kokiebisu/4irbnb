import { ExpandButtonTemplate, ExpandButtonTemplateProps } from './template';

export interface ExpandButtonProps extends ExpandButtonTemplateProps {}

export const ExpandButton: React.FC<ExpandButtonProps> = (props) => {
  return <ExpandButtonTemplate {...props} />;
};

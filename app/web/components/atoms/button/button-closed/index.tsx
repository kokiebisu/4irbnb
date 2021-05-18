import { ClosedButtonTemplate, ClosedButtonTemplateProps } from './template';

export interface ClosedButtonProps extends ClosedButtonTemplateProps {}

export const ClosedButton: React.FC<ClosedButtonProps> = ({ ...props }) => {
  return <ClosedButtonTemplate {...props} />;
};

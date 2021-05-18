import { LogoButtonTemplate, LogoButtonTemplateProps } from './template';

export type LogoButtonProps = LogoButtonTemplateProps;

export const LogoButton: React.FC<LogoButtonProps> = (props) => {
  return <LogoButtonTemplate {...props} />;
};

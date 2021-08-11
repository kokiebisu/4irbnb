import { LogoButtonTemplate, LogoButtonTemplateProps } from './template';

export type LogoButtonProps = LogoButtonTemplateProps;

export const LogoButton = (props: LogoButtonProps): JSX.Element => {
  return <LogoButtonTemplate {...props} />;
};

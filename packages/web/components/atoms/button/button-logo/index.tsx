import { LogoButtonTemplate, LogoButtonTemplateProps } from './template';

export interface LogoButtonProps extends LogoButtonTemplateProps {}

const LogoButton: React.FC<LogoButtonProps> = (props) => {
  return <LogoButtonTemplate {...props} />;
};

export const logo = (props) => {
  return {
    logo: {
      component: <LogoButton {...props} />,
    },
  };
};

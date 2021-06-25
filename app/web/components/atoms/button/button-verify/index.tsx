import { VerifyButtonTemplate, VerifyButtonTemplateProps } from './template';

export type VerifyButtonProps = VerifyButtonTemplateProps;

export const VerifyButton = (props: VerifyButtonProps): JSX.Element => {
  return <VerifyButtonTemplate {...props} />;
};

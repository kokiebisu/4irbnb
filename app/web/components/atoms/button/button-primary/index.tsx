import { PrimaryButtonTemplate, PrimaryButtonTemplateProps } from './template';

export type PrimaryButtonProps = PrimaryButtonTemplateProps;

export const PrimaryButton = (props: PrimaryButtonProps): JSX.Element => {
  return <PrimaryButtonTemplate {...props} />;
};

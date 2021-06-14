import { OptionButtonTemplate, OptionButtonTemplateProps } from './template';

export type OptionButtonProps = OptionButtonTemplateProps;

export const OptionButton = ({ ...props }: OptionButtonProps): JSX.Element => {
  return <OptionButtonTemplate {...props} />;
};

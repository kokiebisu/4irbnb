import { ExpandButtonTemplate, ExpandButtonTemplateProps } from './template';

export type ExpandButtonProps = ExpandButtonTemplateProps;

export const ExpandButton = (props: ExpandButtonProps): JSX.Element => {
  return <ExpandButtonTemplate {...props} />;
};

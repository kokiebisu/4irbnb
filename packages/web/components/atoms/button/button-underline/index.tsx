import {
  UnderlineButtonTemplate,
  UnderlineButtonTemplateProps,
} from './template';

export type UnderlineButtonProps = UnderlineButtonTemplateProps;

export const UnderlineButton = (props: UnderlineButtonProps): JSX.Element => {
  return <UnderlineButtonTemplate {...props} />;
};

import { LinkButtonTemplate, LinkButtonTemplateProps } from './template';

export type LinkButtonProps = LinkButtonTemplateProps;

export const LinkButton = (props: LinkButtonProps): JSX.Element => {
  return <LinkButtonTemplate {...props} />;
};

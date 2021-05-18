import { LinkButtonTemplate, LinkButtonTemplateProps } from './template';

export type LinkButtonProps = LinkButtonTemplateProps;

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return <LinkButtonTemplate {...props} />;
};

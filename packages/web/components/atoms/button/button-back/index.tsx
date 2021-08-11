import { BackButtonTemplate, BackButtonTemplateProps } from "./template";

export type BackButtonProps = BackButtonTemplateProps;

export const BackButton = (props: BackButtonProps): JSX.Element => {
  return <BackButtonTemplate {...props} />;
};

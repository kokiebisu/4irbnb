import { GeneralIconTemplateProps, GeneralIconTemplate } from './template';

export type GeneralIconProps = GeneralIconTemplateProps;

export const GeneralIcon = (props: GeneralIconProps) => {
  return <GeneralIconTemplate {...props} />;
};

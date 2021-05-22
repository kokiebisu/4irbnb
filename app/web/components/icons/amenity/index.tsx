import { AmenityIconTemplate, AmenityIconTemplateProps } from './template';

export type AmenityIconProps = AmenityIconTemplateProps;

export const AmenityIcon = (props: AmenityIconProps) => {
  return <AmenityIconTemplate {...props} />;
};

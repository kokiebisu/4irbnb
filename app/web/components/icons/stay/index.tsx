import { StayIconTemplate, StayIconTemplateProps } from './template';

export type StayIconProps = StayIconTemplateProps;

export const StayIcon = (props: StayIconProps): JSX.Element => {
  return <StayIconTemplate {...props} />;
};

import { StayIconTemplate, StayIconTemplateProps } from './template';

export type StayIconProps = {
  width: number;
  height: number;
} & StayIconTemplateProps;

export const StayIcon = ({
  width,
  height,
  ...props
}: StayIconProps): JSX.Element => {
  return (
    <div data-testid="stay-icon" style={{ width, height }}>
      <StayIconTemplate {...props} />
    </div>
  );
};

import {
  AvailabilityBarTemplate,
  AvailabilityBarTemplateProps,
} from "./template";

export type AvailabilityBarProps = AvailabilityBarTemplateProps;

export const AvailabilityBar = (props: AvailabilityBarProps): JSX.Element => {
  return (
    <div data-testid="bar-availability--organism">
      <AvailabilityBarTemplate {...props} />
    </div>
  );
};

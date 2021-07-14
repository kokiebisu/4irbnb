import { ProgressBarTemplate, ProgressBarTemplateProps } from "./template";

export type ProgressBarProps = ProgressBarTemplateProps;

export const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  return (
    <div data-testid="bar-progress--organism">
      <ProgressBarTemplate {...props} />
    </div>
  );
};

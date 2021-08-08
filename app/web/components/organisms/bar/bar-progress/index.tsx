import { ProgressBarTemplate, ProgressBarTemplateProps } from "./template";

export type ProgressBarProps = ProgressBarTemplateProps;

export const ProgressBar = (): JSX.Element => {
  return (
    <div data-testid="bar-progress--organism">
      <ProgressBarTemplate />
    </div>
  );
};

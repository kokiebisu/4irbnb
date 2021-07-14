import { CovidBarTemplate, CovidBarTemplateProps } from "./template";

export type CovidBarProps = CovidBarTemplateProps;

const CovidBar = (props: CovidBarProps): JSX.Element => {
  return (
    <div data-testid="bar-covid--organism">
      <CovidBarTemplate {...props} />
    </div>
  );
};

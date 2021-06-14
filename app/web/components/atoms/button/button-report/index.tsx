import { ReportButtonTemplate, ReportButtonTemplateProps } from './template';

export type ReportButtonProps = ReportButtonTemplateProps;

export const ReportButton = (props: ReportButtonProps): JSX.Element => {
  return <ReportButtonTemplate {...props} />;
};

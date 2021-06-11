import { ReportButtonTemplate } from './template';

export interface ReportButtonProps {}

export const ReportButton: React.FC<ReportButtonProps> = (props) => {
  return <ReportButtonTemplate {...props} />;
};

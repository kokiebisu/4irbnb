import { ReportButtonTemplate } from './template';

export interface ReportButtonProps {}

const ReportButton: React.FC<ReportButtonProps> = (props) => {
  return <ReportButtonTemplate {...props} />;
};

export const report = (props) => {
  return {
    report: {
      component: <ReportButton {...props} />,
    },
  };
};

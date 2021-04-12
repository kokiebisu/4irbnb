import { Icon } from '@icons';

export interface ReportButtonProps {}

/**
 * Renders the Report Button
 */
export const ReportButton: React.FC<ReportButtonProps> = () => {
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <Icon variant="general" generalType="flag" width={16} />
      </div>
      <div>
        <h5 className="font-light text-sm">Report this listing</h5>
      </div>
    </div>
  );
};

export const report = (props) => {
  return {
    report: <ReportButton {...props} />,
  };
};

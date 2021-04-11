import { Icon, $Icon } from '@icons';

export interface ReportButtonProps {}

/**
 * Renders the Report Button
 */
export const ReportButton: React.FC<ReportButtonProps> = () => {
  return (
    <button>
      <div>
        <Icon variant={$Icon.GENERAL} generalType="flag" width={16} />
      </div>
      <div>Report this listing</div>
    </button>
  );
};

export const report = (props) => {
  return {
    report: {
      component: <ReportButton {...props} />,
      style: '',
    },
  };
};

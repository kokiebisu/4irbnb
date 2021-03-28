import { Flag } from '@svg/original';

/**
 * Renders the Report Button
 */
const ReportButton: React.FC<{}> = () => {
  return (
    <button>
      <div>
        <Flag width={16} />
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

import { Flag } from '@svg/original';

/**
 * Renders the Report Button
 */
export const ReportButton: React.FC<{}> = () => {
  return (
    <button>
      <div>
        <Flag width={16} />
      </div>
      <div>Report this listing</div>
    </button>
  );
};

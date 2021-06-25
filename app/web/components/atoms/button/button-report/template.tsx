import { Icon } from '@atoms';

export type ReportButtonTemplateProps = {
  onClick: () => void;
};

/**
 * Renders the Report Button
 */
export const ReportButtonTemplate = ({
  onClick,
}: ReportButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="report-button"
      className="report-button"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="mr-3">
          <Icon
            variant="general"
            generalType="flag"
            width={16}
            height={16}
            fill="black"
          />
        </div>
        <div>
          <h5 className="font-light text-sm">Report this listing</h5>
        </div>
      </div>
    </button>
  );
};

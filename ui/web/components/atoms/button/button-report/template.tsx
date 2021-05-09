import { Icon } from '@icons';

export interface ReportButtonTemplateProps {}

/**
 * Renders the Report Button
 */
export const ReportButtonTemplate: React.FC<ReportButtonTemplateProps> = () => {
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

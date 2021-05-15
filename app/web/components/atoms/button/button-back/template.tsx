import { Icon } from '@icons';

export interface BackButtonTemplateProps {}

/**
 * Renders the back button
 * @returns
 */
export const BackButtonTemplate: React.FC<BackButtonTemplateProps> = () => {
  return (
    <div className="flex items-center bg-transparent">
      <div>
        <Icon
          variant="action"
          actionType="left"
          width={20}
          stroke="#61AFB2"
          strokeWidth={3}
        />
      </div>
      <div>
        <h4 className="text-sm text-green-700">Back</h4>
      </div>
    </div>
  );
};

import { Icon } from 'components/atoms/icon';

export interface ExpandButtonTemplateProps {
  title: string;
}

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
export const ExpandButtonTemplate: React.FC<ExpandButtonTemplateProps> = ({
  title,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <u className="text-sm">{title}</u>
        </div>
        <div>
          <Icon
            variant="action"
            actionType="right"
            width={14}
            stroke="black"
            strokeWidth={5}
          />
        </div>
      </div>
    </div>
  );
};

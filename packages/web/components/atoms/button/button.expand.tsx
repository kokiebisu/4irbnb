import { Icon, $Icon } from '@icons';

export interface ExpandButtonProps {
  to?: string;
  title?: string;
}

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
const ExpandButton: React.FC<ExpandButtonProps> = ({ title = 'Button' }) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <u className="text-sm">{title}</u>
        </div>
        <div>
          <Icon
            variant={$Icon.ACTION}
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

export const expand = (props) => {
  return {
    expand: {
      component: <ExpandButton {...props} />,
      style: '',
    },
  };
};

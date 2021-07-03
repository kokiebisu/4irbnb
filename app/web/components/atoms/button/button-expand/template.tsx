import { Icon } from '@atoms';

export type ExpandButtonTemplateProps = {
  title: string;
  onClick: () => void;
};

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
export const ExpandButtonTemplate = ({
  title,
  onClick,
}: ExpandButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="expand-button"
      className="inline-block"
      onClick={onClick}
    >
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
              height={14}
              stroke="black"
              strokeWidth={5}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

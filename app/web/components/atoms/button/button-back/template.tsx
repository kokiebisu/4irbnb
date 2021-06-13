import { Icon } from '@atoms';

export type BackButtonTemplateProps = {
  onClick: () => void;
};

/**
 * Renders the back button
 * @returns
 */
export const BackButtonTemplate = ({
  onClick,
}: BackButtonTemplateProps): JSX.Element => {
  return (
    <button onClick={onClick} className="block">
      <div className="flex items-center bg-transparent">
        <div>
          <Icon
            variant="action"
            actionType="left"
            width={20}
            height={20}
            stroke="#61AFB2"
            strokeWidth={3}
          />
        </div>
        <div>
          <h4 className="text-sm text-green-700">Back</h4>
        </div>
      </div>
    </button>
  );
};

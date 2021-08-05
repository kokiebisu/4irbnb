import { Icon } from "@atoms";

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
    <button
      data-testid="back-button"
      onClick={onClick}
      className="inline-block"
    >
      <div className="flex items-center bg-transparent">
        <div>
          <Icon
            variant="stroke"
            strokeType="chevronLeft"
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

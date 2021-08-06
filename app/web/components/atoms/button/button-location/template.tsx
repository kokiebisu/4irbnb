export type LocationButtonTemplateProps = {
  title: string;
  description?: string;
  onClick: () => void;
  icon: JSX.Element;
};

/**
 * Renders the Location Button component
 * @param type
 * @param location
 * @param from
 * @param to
 */
export const LocationButtonTemplate = ({
  icon,
  title,
  description,
  onClick,
}: LocationButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="location-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="flex items-center py-3">
        <div className="mr-6">
          <div>{icon}</div>
        </div>
        <div>
          <div>
            <h4 className="text-left text-sm">{title}</h4>
          </div>
          <div>
            <h4 className="text-left text-xs text-gray-500">{description}</h4>
          </div>
        </div>
      </div>
    </button>
  );
};

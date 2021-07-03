export type DestinationButtonTemplateProps = {
  city: string;
  location: string;
  onClick: () => void;
};

/**
 * Renders the Destination Button component
 * @param city
 * @param location
 */
export const DestinationButtonTemplate = ({
  city,
  location,
  onClick,
}: DestinationButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="destination-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="py-6 pr-16">
        <div>
          <h4 className="text-sm text-left">{city}</h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 text-left">{location}</h4>
        </div>
      </div>
    </button>
  );
};

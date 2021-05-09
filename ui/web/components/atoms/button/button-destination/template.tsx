export interface DestinationButtonTemplateProps {
  city?: string;
  location?: string;
}

/**
 * Renders the Destination Button component
 * @param city
 * @param location
 */
export const DestinationButtonTemplate: React.FC<DestinationButtonTemplateProps> = ({
  city,
  location,
}) => {
  return (
    <div className="py-6 pr-16">
      <div>
        <h4 className="text-sm text-left">{city}</h4>
      </div>
      <div>
        <h4 className="text-sm text-gray-500 text-left">{location}</h4>
      </div>
    </div>
  );
};

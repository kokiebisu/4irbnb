export interface DestinationButtonProps {
  city?: string;
  location?: string;
}

/**
 * Renders the Destination Button component
 * @param city
 * @param location
 */
export const DestinationButton: React.FC<DestinationButtonProps> = ({
  city = 'City',
  location = 'Location',
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

export const destination = (props) => {
  return {
    destination: <DestinationButton {...props} />,
  };
};

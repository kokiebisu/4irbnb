/**
 * Renders the Destination Button component
 * @param city
 * @param location
 */
export const DestinationButton: React.FC<{
  city?: String;
  location?: String;
}> = ({ city = 'City', location = 'Location' }) => {
  return (
    <div className="py-6 pr-6">
      <div>
        <h4 className="text-sm text-left">{city}</h4>
      </div>
      <div>
        <h4 className="text-sm text-gray-200 text-left">{location}</h4>
      </div>
    </div>
  );
};

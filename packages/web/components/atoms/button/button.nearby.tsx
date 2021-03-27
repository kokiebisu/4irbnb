/**
 * Renders the Nearby Button component
 * @param label
 */
export const NearbyButton: React.FC<{ label?: string }> = ({
  label = 'Nearby',
}) => {
  return (
    <div className="p-1 hover:border-gray-400 border border-transparent rounded-md">
      <div className="border border-gray-100 px-5 py-3 rounded-sm">
        <h4 className="text-xs">{label}</h4>
      </div>
    </div>
  );
};

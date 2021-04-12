export interface NearbyButtonProps {
  label?: string;
}

/**
 * Renders the Nearby Button component
 * @param label
 */
export const NearbyButton: React.FC<NearbyButtonProps> = ({ label }) => {
  return (
    <div className="inline-block px-3 py-2 hover:border-gray-400 border border-gray-200 rounded-lg">
      <h4 className="text-xs">{label}</h4>
    </div>
  );
};

export const nearby = (props) => {
  return {
    nearby: <NearbyButton {...props} />,
  };
};

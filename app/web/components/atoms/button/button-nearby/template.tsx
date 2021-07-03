export type NearbyButtonTemplateProps = {
  label: string;
  onClick: () => void;
};

/**
 * Renders the Nearby Button component
 * @param label
 */
export const NearbyButtonTemplate: React.FC<NearbyButtonTemplateProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      data-testid="label-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="inline-block px-3 py-2 hover:border-gray-400 border border-gray-200 rounded-lg">
        <h4 className="text-xs">{label}</h4>
      </div>
    </button>
  );
};

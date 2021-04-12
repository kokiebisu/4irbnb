export interface GlobeButtonProps {
  language?: string;
  region?: string;
  selected?: boolean;
}

/**
 * Renders the Globe Button
 * @param language
 * @param region
 * @param selected
 */
export const GlobeButton: React.FC<GlobeButtonProps> = ({
  language,
  region,
  selected,
}) => {
  return (
    <div
      className={`hover:bg-gray-100 pl-3 pr-8 py-3 rounded-md ${
        selected ? 'border border-black' : null
      }`}
    >
      <div>
        <p className="text-sm text-black">{language}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">{region}</p>
      </div>
    </div>
  );
};

export const globe = (props) => {
  return {
    globe: <GlobeButton {...props} />,
  };
};

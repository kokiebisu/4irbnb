/**
 * Renders the Globe Button
 * @param language
 * @param region
 * @param selected
 */
export const GlobeButton: React.FC<{
  language?: string;
  region?: string;
  selected?: boolean;
}> = ({ language = 'Language', region = 'Region', selected = false }) => {
  return (
    <div
      className={`pl-3 pr-8 py-3 rounded-md ${
        selected ? 'hover:bg-gray-100' : null
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

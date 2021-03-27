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
    <div className={`p--5 rounded-md ${selected && 'border border-black'}`}>
      <div>
        <p className="text-sm text-black">{language}</p>
      </div>
      <div>
        <p className="text-sm text-gray-200">{region}</p>
      </div>
    </div>
  );
};

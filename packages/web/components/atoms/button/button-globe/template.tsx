export type GlobeButtonTemplateProps = {
  language: string;
  region: string;
  selected: boolean;
  onClick: () => void;
};

/**
 * Renders the Globe Button
 * @param language
 * @param region
 * @param selected
 */
export const GlobeButtonTemplate = ({
  language,
  region,
  selected,
  onClick,
}: GlobeButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="globe-button"
      className="w-full text-left"
      onClick={onClick}
    >
      <div
        className={`hover:bg-gray-100 pl-3 pr-8 py-3 rounded-md ${
          selected ? "border border-black" : ""
        }`}
      >
        <div>
          <p className="text-sm text-black">{language}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">{region}</p>
        </div>
      </div>
    </button>
  );
};

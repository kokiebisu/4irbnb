export interface CurrencyButtonTemplateProps {
  name?: string;
  abbreviation?: string;
  symbol?: string;
}

/**
 * Renders the Current Button component
 * @param name
 * @param abbreviation
 * @param symbol
 * @returns
 */
export const CurrencyButtonTemplate: React.FC<CurrencyButtonTemplateProps> = ({
  name,
  abbreviation,
  symbol,
}) => {
  return (
    <div className={`pl-3 pr-8 py-3 rounded-md hover:bg-gray-100`}>
      <div>
        <p className="text-left text-sm text-black">{name}</p>
      </div>
      <div>
        <p className="text-left text-sm text-gray-400">
          <span>{abbreviation}</span>
          <span> - </span>
          <span>{symbol}</span>
        </p>
      </div>
    </div>
  );
};

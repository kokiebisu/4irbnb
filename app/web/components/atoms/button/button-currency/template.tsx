export type CurrencyButtonTemplateProps = {
  name: string;
  abbreviation: string;
  symbol: string;
  onClick: () => void;
};

/**
 * Renders the Current Button component
 * @param name
 * @param abbreviation
 * @param symbol
 * @returns
 */
export const CurrencyButtonTemplate = ({
  name,
  abbreviation,
  symbol,
  onClick,
}: CurrencyButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="currency-button"
      className="inline-block"
      onClick={onClick}
    >
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
    </button>
  );
};

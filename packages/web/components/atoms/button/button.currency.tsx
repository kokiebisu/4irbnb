/**
 * Renders the Current Button component
 * @param param0
 * @returns
 */
export const CurrencyButton: React.FC<{
  name?: string;
  abbreviation?: string;
  symbol?: string;
}> = ({ name, abbreviation, symbol }) => {
  return (
    <div
      className="p--4 rounded"
      // animation["hover-background--white__1"],
    >
      <div>
        <p className="text-sm text-black">{name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-200">
          <span>{abbreviation}</span>
          <span> - </span>
          <span>{symbol}</span>
        </p>
      </div>
    </div>
  );
};

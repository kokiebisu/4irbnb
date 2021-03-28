/**
 * Renders the Current Button component
 * @param name
 * @param abbreviation
 * @param symbol
 * @returns
 */
const CurrencyButton: React.FC<{
  name?: string;
  abbreviation?: string;
  symbol?: string;
}> = ({ name, abbreviation, symbol }) => {
  return (
    <div className={`pl-3 pr-8 py-3 rounded-md hover:bg-gray-100`}>
      <div>
        <p className="text-sm text-black">{name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">
          <span>{abbreviation}</span>
          <span> - </span>
          <span>{symbol}</span>
        </p>
      </div>
    </div>
  );
};

export const currency = (props) => {
  return {
    currency: {
      component: <CurrencyButton {...props} />,
      style: '',
    },
  };
};

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
const OptionButton: React.FC<{ name?: string; bold?: boolean }> = ({
  name = 'Option',
  bold = false,
}) => {
  return (
    <div
      className={`text-left text-sm bg-white px-5 py-3 block hover:bg-gray-100 ${
        bold ? 'font-base' : 'font-light'
      }`}
    >
      {name}
    </div>
  );
};

export const option = (props) => {
  return {
    option: {
      component: <OptionButton {...props} />,
      style: '',
    },
  };
};

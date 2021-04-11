export interface OptionButtonProps {
  name?: string;
  bold?: boolean;
}

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
export const OptionButton: React.FC<OptionButtonProps> = ({ name, bold }) => {
  return (
    <div
      className={`inline-block rounded-lg text-left text-sm bg-white px-5 py-3 hover:bg-gray-100 ${
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
    },
  };
};

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = 'Button',
  inverse = false,
}) => {
  return (
    <div
      className={`whitespace-nowrap py-2 px-6 rounded-full ${
        inverse
          ? 'bg-transparent border-2 border-gray-300 hover:border-black'
          : 'bg-gray-100 border-gray-100 border-2'
      }`}
    >
      <p className="text-sm">{label}</p>
    </div>
  );
};

export const filter = (props) => {
  return {
    filter: {
      component: <FilterButton {...props} />,
      style: '',
    },
  };
};

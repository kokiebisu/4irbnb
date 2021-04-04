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
      className={`whitespace-nowrap py-3 px-6 rounded-full ${
        inverse ? '' : 'bg-transparent bg-gray-100'
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

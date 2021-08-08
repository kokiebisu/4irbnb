export type FilterButtonTemplateProps = {
  label: string;
  inverse?: boolean;
  onClick: () => void;
};

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButtonTemplate = ({
  label,
  inverse,
  onClick,
}: FilterButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="filter-button"
      className="inline-block"
      onClick={onClick}
    >
      <div
        className={`inline-block whitespace-nowrap py-2 px-6 rounded-full ${
          inverse
            ? "bg-transparent border-2 border-gray-300 hover:border-black"
            : "bg-gray-100 border-gray-100 border-2"
        }`}
      >
        <p className="text-sm">{label}</p>
      </div>
    </button>
  );
};

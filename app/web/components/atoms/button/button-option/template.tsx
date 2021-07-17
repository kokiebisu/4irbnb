export type OptionButtonTemplateProps = {
  name: string;
  bold?: boolean;
  onClick: () => void;
};

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
export const OptionButtonTemplate = ({
  name,
  bold,
  onClick,
}: OptionButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="option-button"
      className="w-full block"
      onClick={onClick}
    >
      <div
        className={`w-full rounded-lg text-left text-sm bg-white px-5 py-3 hover:bg-gray-100 ${
          bold ? "font-base" : "font-light"
        }`}
      >
        {name}
      </div>
    </button>
  );
};

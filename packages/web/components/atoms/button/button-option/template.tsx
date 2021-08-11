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
        style={{ padding: "8px 16px" }}
        className={`w-full text-left bg-white hover:bg-gray-100 ${
          bold ? "font-base" : "font-light"
        }`}
      >
        <p
          className={`text-sm ${
            bold ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          {name}
        </p>
      </div>
    </button>
  );
};

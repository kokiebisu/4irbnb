export type TransparentButtonTemplateProps = {
  children: any;
  inverse?: boolean;
  onClick: () => void;
};

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const TransparentButtonTemplate = ({
  children,
  inverse,
  onClick,
}: TransparentButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="transparent-button"
      className="inline-block"
      onClick={onClick}
    >
      <div
        className={`${
          inverse
            ? "hover:bg-gray-100 hover:bg-opacity-10"
            : "hover:bg-gray-100 hover:bg-opacity-70"
        } rounded-full inline-flex items-center bg-transparent py-3 px-4`}
      >
        {children}
      </div>
    </button>
  );
};

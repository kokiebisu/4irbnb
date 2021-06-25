export type ModalButtonTemplateProps = {
  icon: JSX.Element;
  onClick: () => void;
};

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButtonTemplate = ({
  icon,
  onClick,
}: ModalButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="modal-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="inline-block bg-transparent p-3 rounded-full hover:bg-gray-100">
        {icon}
      </div>
    </button>
  );
};

export type UnderlineButtonTemplateProps = {
  title: string;
  font: number;
  bold?: boolean;
  unselected?: boolean;
  onClick: () => void;
};

/**
 * Renders the underline button component
 * @param {function} onClick - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButtonTemplate = ({
  title,
  font,
  bold,
  unselected,
  onClick,
}: UnderlineButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="underline-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="inline-block bg-transparent">
        {bold ? (
          <h3
            className={unselected ? 'color-gray-200' : ''}
            style={{ fontSize: font }}
          >
            {unselected ? title : <u>{title}</u>}
          </h3>
        ) : (
          <h4
            style={{ fontSize: font }}
            className={unselected ? 'c--white__3' : ''}
          >
            {unselected ? title : <u>{title}</u>}
          </h4>
        )}
      </div>
    </button>
  );
};

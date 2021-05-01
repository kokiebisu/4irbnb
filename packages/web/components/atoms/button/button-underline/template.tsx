export interface UnderlineButtonTemplateProps {
  title?: string;
  font?: number;
  bold?: boolean;
  unselected?: boolean;
}

/**
 * Renders the underline button component
 * @param {function} onClick - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButtonTemplate: React.FC<UnderlineButtonTemplateProps> = ({
  title,
  font,
  bold,
  unselected,
}) => {
  return (
    <div className="inline-block bg-transparent">
      {bold ? (
        <h3
          className={unselected ? 'color-gray-200' : null}
          style={{ fontSize: font }}
        >
          {unselected ? title : <u>{title}</u>}
        </h3>
      ) : (
        <h4
          style={{ fontSize: font }}
          className={unselected ? 'c--white__3' : null}
        >
          {unselected ? title : <u>{title}</u>}
        </h4>
      )}
    </div>
  );
};
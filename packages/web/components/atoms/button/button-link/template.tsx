export type LinkButtonTemplateProps = {
  title: string;
  onClick: () => void;
};

/**
 * Renders the Link Button component
 * @param title
 */
export const LinkButtonTemplate = ({
  title,
  onClick,
}: LinkButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="link-button"
      className="inline-block"
      onClick={onClick}
    >
      <div>
        <h4 className="text-sm">{title}</h4>
      </div>
    </button>
  );
};

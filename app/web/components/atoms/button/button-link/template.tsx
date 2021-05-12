export interface LinkButtonTemplateProps {
  title?: string;
}

/**
 * Renders the Link Button component
 * @param title
 */
export const LinkButtonTemplate: React.FC<LinkButtonTemplateProps> = ({
  title,
}) => {
  return (
    <div>
      <h4 className="text-sm">{title}</h4>
    </div>
  );
};

/**
 * Renders the Link Button component
 * @param title
 */
export const LinkButton: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div>
      <h4 className="text-sm">{title}</h4>
    </div>
  );
};

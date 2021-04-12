export interface LinkButtonProps {
  title?: string;
}

/**
 * Renders the Link Button component
 * @param title
 */
export const LinkButton: React.FC<LinkButtonProps> = ({ title }) => {
  return (
    <div>
      <h4 className="text-sm">{title}</h4>
    </div>
  );
};

export const link = (props) => {
  return {
    link: <LinkButton {...props} />,
  };
};

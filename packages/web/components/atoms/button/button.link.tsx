/**
 * Renders the Link Button component
 * @param title
 */
const LinkButton: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div>
      <h4 className="text-sm">{title}</h4>
    </div>
  );
};

export const link = (props) => {
  return {
    link: {
      component: <LinkButton {...props} />,
      style: '',
    },
  };
};

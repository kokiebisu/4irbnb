/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
const BannerButton: React.FC<{ title?: string }> = ({ title = 'Button' }) => {
  return (
    <div className="bg-white rounded text-m py-2 px-3 shadow-sm">
      <h3 className="text-sm">{title}</h3>
    </div>
  );
};

export const banner = (props) => {
  return {
    banner: {
      component: <BannerButton {...props} />,
      style: '',
    },
  };
};

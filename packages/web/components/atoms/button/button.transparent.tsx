/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content }) => {
  return (
    <div className="flex items-center bg-transparent py-3 px-4">{content}</div>
  );
};

export const transparent = (props) => {
  const { inverse } = props;
  return {
    transparent: {
      component: <TransparentButton {...props} />,
      style: `${
        inverse
          ? 'hover:bg-gray-300 bg-opacity-40'
          : 'hover:bg-gray-300 bg-opacity-40'
      } rounded-full`,
    },
  };
};

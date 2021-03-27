/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content }) => {
  return (
    <div
      className={`rounded-full flex items-center bg-transparent py-3 px-4 ${
        inverse ? 'hover:bg-transparent' : 'hover:bg-gray-100'
      }`}
    >
      {content}
    </div>
  );
};

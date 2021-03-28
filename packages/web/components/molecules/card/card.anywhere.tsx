/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */
const AnywhereCard: React.FC<{
  imgUrl?: string;
  title?: string;
}> = ({ imgUrl, title = 'Title' }) => {
  return (
    <div>
      <div className="relative pt-full">
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="w-full h-full">
            {imgUrl ? (
              <img src={imgUrl} alt="unique stays" className="rounded-md" />
            ) : (
              <div className="w-full h-full rounded-md bg-gray-300" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-base text-gray-500">{title}</h3>
      </div>
    </div>
  );
};

export const anywhere = (props) => {
  return {
    anywhere: {
      component: <AnywhereCard {...props} />,
      style: '',
    },
  };
};

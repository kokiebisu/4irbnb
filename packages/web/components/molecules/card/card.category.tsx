/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */
const CategoryCard: React.FC<{
  imgUrl?: string;
  title?: string;
}> = ({ imgUrl, title = 'Title' }) => {
  return (
    <div>
      <div className="relative" style={{ paddingTop: '66.66%' }}>
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className=" w-full h-full">
            {imgUrl ? (
              <img src={imgUrl} alt="unique stays" className="rounded-md" />
            ) : (
              <div className="animate-pulse w-full h-full rounded-md bg-gray-500" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-base text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export const category = (props) => {
  return {
    category: {
      component: <CategoryCard {...props} />,
      style: '',
    },
  };
};

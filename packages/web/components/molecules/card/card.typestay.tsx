export interface TypeStayCardProps {
  card?: any;
}

/**
 * Renders the typestay card
 * @param {Object} card - Information about the card
 */
const TypeStayCard: React.FC<TypeStayCardProps> = ({
  card = {
    title: 'Type',
    imgUrl:
      'https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=720',
  },
}) => {
  return (
    <div className="block h-full w-full mr-2">
      <div className="rounded-lg shadow-sm">
        <div className="relative">
          <div className="relative top-0 bottom-0 left-0 right-0">
            <picture>
              <source srcSet={card.imgUrl}></source>
              <img
                decoding="async"
                src={card.imgUrl}
                className="object-cover rounded-t-md"
              />
            </picture>
          </div>
        </div>
        <div className="h-16 sm:h-auto p-4 bg-white rounded-b-md">
          <p className="font-medium text-sm text-gray-400">{card.title}</p>
        </div>
      </div>
    </div>
  );
};

export const typestay = (props) => {
  return {
    typestay: {
      component: <TypeStayCard {...props} />,
      style: '',
    },
  };
};

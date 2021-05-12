export interface TypeStayCardTemplateProps {
  title?: string;
  imgUrl?: string;
}

/**
 * Renders the typestay card
 * @param {Object} card - Information about the card
 */
export const TypeStayCardTemplate: React.FC<TypeStayCardTemplateProps> = ({
  title,
  imgUrl,
}) => {
  return (
    <div className="block h-full w-full mr-2">
      <div className="rounded-lg shadow-sm">
        <div className="relative">
          <div className="relative top-0 bottom-0 left-0 right-0">
            <picture>
              <source srcSet={imgUrl}></source>
              <img
                decoding="async"
                src={imgUrl}
                className="object-cover rounded-t-md"
              />
            </picture>
          </div>
        </div>
        <div className="h-16 sm:h-auto p-4 bg-white rounded-b-md">
          <p className="font-medium text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

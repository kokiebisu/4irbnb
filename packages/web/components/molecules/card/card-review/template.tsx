export interface ReviewCardTemplateProps {
  imgUrl?: string;
  description?: string;
  commentedDate?: string;
  user?: string;
  renderDescription?: () => string;
}

/**
 * Renders the review card component
 * @param {string} imgUrl - Image of the review card
 * @param {string} description - Description of the review card
 */
export const ReviewCardTemplate: React.FC<ReviewCardTemplateProps> = ({
  imgUrl,
  user,
  description,
  commentedDate,
  renderDescription,
}) => {
  return (
    <div className="py-3">
      <div className="flex items-center pb-3">
        <div style={{ height: 55, width: 55 }} className="rounded-full">
          {imgUrl ? (
            <img src={imgUrl} className="rounded-full" />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-300" />
          )}
        </div>
        <div className="ml-3 pb-3 flex items-center">
          <div className="flex flex-col">
            <p className="text-gray-500">{user}</p>
            <p className="text-sm text-gray-400 font-light">{commentedDate}</p>
          </div>
        </div>
      </div>
      <div className="my-3">
        {display || description.split(' ').length < 75 ? (
          <p className="font-thin leading-6">{description}</p>
        ) : (
          <p className="font-thin leading-6">
            {renderDescription(description)}
            <span className="inline-block ml-2">
              <div
                className="bg-transparent text-base"
                onClick={() => setDisplay(!display)}
              >
                <u>read more</u>
              </div>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
